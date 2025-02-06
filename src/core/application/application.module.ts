import { BaseModule } from "@core/infrastructure/container";
import { interfaces } from "inversify";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {}
}
