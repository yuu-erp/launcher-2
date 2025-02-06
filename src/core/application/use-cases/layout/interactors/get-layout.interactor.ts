import { LayoutProps } from "@core/domain/types";
import { GetLayoutInPort } from "../port/get-layout.in-port";
import { GetLayoutOutPort } from "../port/get-layout.out-port";

export class GetLayoutInteractor implements GetLayoutInPort {
  constructor(private readonly getLayoutPort: GetLayoutOutPort) {}

  execute(): LayoutProps {
    return this.getLayoutPort.get();
  }
}
