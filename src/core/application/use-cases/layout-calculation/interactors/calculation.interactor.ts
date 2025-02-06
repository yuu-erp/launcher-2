import { inject, injectable } from "inversify";
import { CalculationInPort } from "../port/calculation.in-port";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { type LayoutCalculationPort } from "@core/infrastructure/layout-calculation/layout-calculation.port";

@injectable()
export class CalculationInteractor implements CalculationInPort {
  constructor(
    @inject(INFRASTRUCTURE.LAYOUT_CALCULATION_SERVICE)
    private readonly layoutCalculationPort: LayoutCalculationPort
  ) {}
  execute(): void {
    this.layoutCalculationPort.calculation();
  }
}
