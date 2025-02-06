import { UseCase } from "@core/domain/use-cases.port.base";
import { ILayoutCalculation } from "@core/infrastructure/layout-calculation/layout-calculation.type";

export interface GetCalculationInPort
  extends UseCase<unknown, ILayoutCalculation> {
  execute(): ILayoutCalculation;
}
