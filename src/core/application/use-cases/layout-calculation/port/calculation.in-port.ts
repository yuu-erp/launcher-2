import { UseCase } from "@core/domain/use-cases.port.base";

export interface CalculationInPort extends UseCase<unknown, unknown> {
  execute(): void;
}
