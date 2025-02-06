import { LayoutProps } from "../types";
import { AggregateRoot } from "./aggregate.base";
import { UniqueEntityID } from "./unique-entity";

export class LayoutEntity extends AggregateRoot<LayoutProps> {
  constructor(props: LayoutProps) {
    super({
      id: new UniqueEntityID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      props: props,
    });
  }
  validate(): void {
    throw new Error("Method not implemented.");
  }
}
