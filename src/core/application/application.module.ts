import { BaseModule } from "@core/infrastructure/container";
import { interfaces } from "inversify";
import { GetLayoutCalculationUseCase } from "./use-cases/layout-calculation/get-layout-calculation.use-case";
import { LoadLayoutCalculationUseCase } from "./use-cases/layout-calculation/load-layout-calculation.use-case";
import { APPLICATION } from "@core/app.symbols";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.getLayoutCalculationUseCase(bind);
    this.loadLayoutCalculationUseCase(bind);
  }

  private getLayoutCalculationUseCase(bind: interfaces.Bind): void {
    bind<GetLayoutCalculationUseCase>(
      APPLICATION.GET_LAYOUT_CALCULATION_USE_CASE
    ).to(GetLayoutCalculationUseCase);
  }
  private loadLayoutCalculationUseCase(bind: interfaces.Bind): void {
    bind<LoadLayoutCalculationUseCase>(
      APPLICATION.LOAD_LAYOUT_CALCULATION_USE_CASE
    ).to(LoadLayoutCalculationUseCase);
  }
}
