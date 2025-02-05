import { APPLICATION } from "@core/app.symbols";
import { GetLayoutCalculationUseCase } from "@core/application/use-cases/layout-calculation/get-layout-calculation.use-case";
import { LoadLayoutCalculationUseCase } from "@core/application/use-cases/layout-calculation/load-layout-calculation.use-case";
import { AppContainer } from "./app-container";

async function bootstrap() {
  try {
    const app = new AppContainer();
    app.init();

    const loadLayoutCalculationUseCase = app.get<LoadLayoutCalculationUseCase>(
      APPLICATION.LOAD_LAYOUT_CALCULATION_USE_CASE
    );
    const getLayoutCalculationUseCase = app.get<GetLayoutCalculationUseCase>(
      APPLICATION.GET_LAYOUT_CALCULATION_USE_CASE
    );
    loadLayoutCalculationUseCase.execute();
    console.log(
      "getLayoutCalculationUseCase",
      getLayoutCalculationUseCase.execute()
    );
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
