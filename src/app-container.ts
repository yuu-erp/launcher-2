import { ApplicationModule } from "@core/application/application.module";
import { BaseContainer } from "@core/infrastructure/container";
import { DataSourceModule } from "@core/infrastructure/data-source/data-source.module";
import { LayoutCalculationModule } from "@core/infrastructure/layout-calculation/layout-calculation.module";
import { StorageModule } from "@core/infrastructure/storage";

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCore();
  }

  private initializeCore() {
    this.provideStorage();
    this.provideLayoutCalculation();
    this.provideDataSource();
    this.provideApplication();
  }
  // core/application
  private provideApplication(): void {
    this.load(new ApplicationModule());
  }
  // core/infrastructure/storage
  private provideStorage(): void {
    this.load(new StorageModule());
  }
  // core/infrastructure/storage
  private provideLayoutCalculation(): void {
    this.load(new LayoutCalculationModule());
  }

  private provideDataSource(): void {
    this.load(new DataSourceModule());
  }
}
