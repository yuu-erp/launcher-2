import { INFRASTRUCTURE } from "@core/app.symbols";
import { type LayoutCalculationPort } from "@core/infrastructure/layout-calculation/layout-calculation.port";
import { inject, injectable } from "inversify";

@injectable()
export class LoadLayoutCalculationUseCase {
  constructor(
    @inject(INFRASTRUCTURE.LAYOUT_CALCULATION_SERVICE)
    private readonly layoutCalculationPort: LayoutCalculationPort
  ) {}

  execute(): void {
    this.layoutCalculationPort.calculation();
  }
}
