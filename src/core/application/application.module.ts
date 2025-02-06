import { BaseModule } from "@core/infrastructure/container";
import { interfaces } from "inversify";
import { APPLICATION } from "@core/app.symbols";
import {
  CalculationInPort,
  CalculationInteractor,
  GetCalculationInPort,
  GetCalculationInteractor,
} from "./use-cases/layout-calculation";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.getCalculationUseCase(bind);
    this.calculationUseCase(bind);
  }

  private getCalculationUseCase(bind: interfaces.Bind): void {
    bind<GetCalculationInPort>(APPLICATION.GET_CALCULATION_USE_CASE).to(
      GetCalculationInteractor
    );
  }
  private calculationUseCase(bind: interfaces.Bind): void {
    bind<CalculationInPort>(APPLICATION.CALCULATION_USE_CASE).to(
      CalculationInteractor
    );
  }
}
