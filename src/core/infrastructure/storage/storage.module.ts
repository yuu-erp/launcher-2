import { INFRASTRUCTURE } from "../../app.symbols";
import { interfaces } from "inversify";
import { BaseModule } from "../container";
import { InMemoryStorageService } from "./in-memory-storage.service";
import { StoragePort } from "./storage.port";

export class StorageModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.inMemoryStorageService(bind);
  }

  private inMemoryStorageService(bind: interfaces.Bind): void {
    bind<StoragePort>(INFRASTRUCTURE.IN_MEMORY_STORAGE_SERVICE).to(
      InMemoryStorageService
    );
  }
}
