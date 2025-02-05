import { ILayoutCalculation } from "./layout-calculation.type";

export interface LayoutCalculationPort {
  calculation(): void;
  getAllVariable(): ILayoutCalculation;
}
