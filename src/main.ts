import { AppContainer } from "./app-container";

async function bootstrap() {
  try {
    const app = new AppContainer();
    app.init();
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
