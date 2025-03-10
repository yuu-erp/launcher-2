import { Emitter } from "@core/infrastructure/event";
import { LoggerPort } from "@core/infrastructure/logger/logger.port";
import { DomainEvent } from "../events";
import { Entity } from "./entity.base";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private domainEvents: DomainEvent[] = [];

  get domainEventsList(): DomainEvent[] {
    return this.domainEvents;
  }

  set domainEventsList(domainEvents: DomainEvent[]) {
    this.domainEvents = domainEvents;
  }

  protected addEvent(domainEvent: DomainEvent | DomainEvent[]): void {
    if (Array.isArray(domainEvent)) {
      this.domainEvents = [...this.domainEvents, ...domainEvent];
    } else {
      this.domainEvents.push(domainEvent);
    }
  }

  clearEvents(): void {
    this.domainEvents = [];
  }

  async publishEvents(logger: LoggerPort, emitter: Emitter): Promise<void> {
    const promiseEvents = this.domainEvents.map((event) => {
      logger.debug(
        `[RequestID] "${event.constructor.name}" event published for aggregate ${this.constructor.name} : ${this.id}`
      );
      return emitter.emitAsync(event.constructor.name, event);
    });
    for await (const event of promiseEvents) {
      event;
    }
    this.clearEvents();
  }
}
