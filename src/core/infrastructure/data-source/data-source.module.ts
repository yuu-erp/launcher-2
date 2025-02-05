import { interfaces } from "inversify";
import { BaseModule } from "../container";
import { DataSourceService } from "./data-source.service";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { DataSourcePort } from "./data-source.port";

export class DataSourceModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.dataSourceService(bind);
  }

  private dataSourceService(bind: interfaces.Bind): void {
    bind<DataSourcePort>(INFRASTRUCTURE.DATA_SOURCE_SERVICE).to(
      DataSourceService
    );
  }
}
