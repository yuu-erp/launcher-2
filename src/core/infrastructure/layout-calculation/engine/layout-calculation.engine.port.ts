import { ILayoutCalculation } from "../layout-calculation.type";

export interface LayoutCalculationEnginePort {
  execute(): ILayoutCalculation;
}
