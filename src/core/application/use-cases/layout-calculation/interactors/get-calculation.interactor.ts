import { ILayoutCalculation } from "@core/infrastructure/layout-calculation/layout-calculation.type";
import { GetCalculationInPort } from "../port/get-calculation.in-port";
import { inject, injectable } from "inversify";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { type LayoutCalculationPort } from "@core/infrastructure/layout-calculation/layout-calculation.port";

@injectable()
export class GetCalculationInteractor implements GetCalculationInPort {
  constructor(
    @inject(INFRASTRUCTURE.LAYOUT_CALCULATION_SERVICE)
    private readonly layoutCalculationPort: LayoutCalculationPort
  ) {}

  execute(): ILayoutCalculation {
    return this.layoutCalculationPort.getAllVariable();
  }
}
