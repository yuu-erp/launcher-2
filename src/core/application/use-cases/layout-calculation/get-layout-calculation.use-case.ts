import { INFRASTRUCTURE } from "@core/app.symbols";
import { type LayoutCalculationPort } from "@core/infrastructure/layout-calculation/layout-calculation.port";
import { ILayoutCalculation } from "@core/infrastructure/layout-calculation/layout-calculation.type";
import { inject, injectable } from "inversify";

@injectable()
export class GetLayoutCalculationUseCase {
  constructor(
    @inject(INFRASTRUCTURE.LAYOUT_CALCULATION_SERVICE)
    private readonly layoutCalculationPort: LayoutCalculationPort
  ) {}

  execute(): ILayoutCalculation {
    return this.layoutCalculationPort.getAllVariable();
  }
}
