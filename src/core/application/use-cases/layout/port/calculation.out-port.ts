import { LayoutEntity } from "@core/domain/entities";

export abstract class CalculationOutPort {
  abstract insert(user: LayoutEntity): LayoutEntity;
}
