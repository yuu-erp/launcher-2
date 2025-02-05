import { interfaces } from "inversify";
import { BaseModule } from "../container";
import { LayoutCalculationPort } from "./layout-calculation.port";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { LayoutCalculationService } from "./layout-calculation.service";
import { LayoutCalculationEnginePort } from "./engine/layout-calculation.engine.port";
import { LayoutCalculationEngine } from "./engine/layout-calculation.engine";

export class LayoutCalculationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.layoutCalculationEngine(bind);
    this.layoutCalculationService(bind);
  }

  private layoutCalculationService(bind: interfaces.Bind): void {
    bind<LayoutCalculationPort>(INFRASTRUCTURE.LAYOUT_CALCULATION_SERVICE).to(
      LayoutCalculationService
    );
  }
  private layoutCalculationEngine(bind: interfaces.Bind): void {
    bind<LayoutCalculationEnginePort>(
      INFRASTRUCTURE.LAYOUT_CALCULATION_ENGINE
    ).to(LayoutCalculationEngine);
  }
}
