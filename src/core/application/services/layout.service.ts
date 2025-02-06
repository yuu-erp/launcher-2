import { LayoutProps } from "@core/domain/types";
import { ILayoutRepository } from "../repository";
import { CalculationInPort } from "../use-cases/layout/port/calculation.in-port";
import { GetLayoutInPort } from "../use-cases/layout/port/get-layout.in-port";

export class LayoutService implements ILayoutRepository {
  constructor(
    private readonly calculationUseCase: CalculationInPort,
    private readonly getLayoutUseCase: GetLayoutInPort
  ) {}

  calculation(): void {
    this.calculationUseCase.execute();
  }

  getLayout(): LayoutProps {
    return this.getLayoutUseCase.execute();
  }
}
