import { LayoutEntity } from "@core/domain/entities";
import { UseCase } from "@core/domain/use-cases.port.base";

export abstract class CalculationInPort
  implements UseCase<unknown, LayoutEntity>
{
  abstract execute(): LayoutEntity;
}
