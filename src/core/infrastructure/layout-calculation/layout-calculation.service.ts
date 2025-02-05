import { inject, injectable } from "inversify";
import { type StoragePort } from "../storage/storage.port";
import { LayoutCalculationPort } from "./layout-calculation.port";
import { ILayoutCalculation } from "./layout-calculation.type";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { type LayoutCalculationEnginePort } from "./engine/layout-calculation.engine.port";

@injectable()
export class LayoutCalculationService implements LayoutCalculationPort {
  constructor(
    @inject(INFRASTRUCTURE.IN_MEMORY_STORAGE_SERVICE)
    private readonly storage: StoragePort<ILayoutCalculation>,
    @inject(INFRASTRUCTURE.LAYOUT_CALCULATION_ENGINE)
    private readonly layoutCalculationEnginePort: LayoutCalculationEnginePort
  ) {}
  calculation(): void {
    const payload = this.layoutCalculationEnginePort.execute();
    this.storage.set("layout-calculation", payload);
  }

  getAllVariable(): ILayoutCalculation {
    return this.storage.get("layout-calculation") as ILayoutCalculation;
  }
}
