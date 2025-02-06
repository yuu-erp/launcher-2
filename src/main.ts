import { APPLICATION } from "@core/app.symbols";
import { AppContainer } from "./app-container";
import {
  CalculationInPort,
  GetCalculationInPort,
} from "@core/application/use-cases/layout-calculation";

async function bootstrap() {
  try {
    const app = new AppContainer();
    app.init();

    const calculationUseCase = app.get<CalculationInPort>(
      APPLICATION.CALCULATION_USE_CASE
    );
    const getCalculationUseCase = app.get<GetCalculationInPort>(
      APPLICATION.GET_CALCULATION_USE_CASE
    );
    calculationUseCase.execute();

    console.log("getCalculationUseCase: ", getCalculationUseCase.execute());
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
