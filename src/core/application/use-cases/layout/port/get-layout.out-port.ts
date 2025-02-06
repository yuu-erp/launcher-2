import { LayoutProps } from "@core/domain/types";

export abstract class GetLayoutOutPort {
  abstract get(): LayoutProps;
}
