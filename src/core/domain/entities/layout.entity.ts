import { useResponsiveValue } from "@core/helpers";
import { Device } from "../enums";
import { LayoutProps } from "../types";
import { AggregateRoot } from "./aggregate.base";
import { UniqueEntityID } from "./unique-entity";
import {
  CHECKPOINT_COLUMN,
  CHECKPOINT_COLUMN_DOCK,
  CHECKPOINT_DEVICE,
  HEIGHT_DOCK,
  HEIGHT_DOCK_CONTAINER,
  HEIGHT_PAGINATION,
  HEIGHT_STATUS_BAR,
  SIZE_ICON,
} from "../constants";

export class LayoutEntity extends AggregateRoot<LayoutProps> {
  constructor(props: LayoutProps) {
    super({
      id: new UniqueEntityID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      props: props,
    });
  }

  validate(): void {
    // Thực hiện các kiểm tra dữ liệu cần thiết trong entity này
    const { device, screenCheckPoint } = this.getProps();

    if (!screenCheckPoint || screenCheckPoint <= 0) {
      throw new Error("Invalid screenCheckPoint");
    }

    if (!Object.values(Device).includes(device)) {
      throw new Error("Invalid device type");
    }

    // Có thể thêm các kiểm tra khác nếu cần
  }

  private device(): Device {
    return useResponsiveValue(CHECKPOINT_DEVICE, Device.MOBILE); // giá trị mặt định là của mobile
  }

  private calculateLayout(): LayoutProps {
    const screenCheckPoint =
      this.device() === Device.MOBILE ? innerWidth : innerWidth * 0.7;
    const heightStatusBar = useResponsiveValue(HEIGHT_STATUS_BAR, 60);
    const heightPagination = useResponsiveValue(HEIGHT_PAGINATION, 40);
    const heightDock = useResponsiveValue(HEIGHT_DOCK, 120);
    const heightDockContainer = useResponsiveValue(HEIGHT_DOCK_CONTAINER, 96);
    const sizeIcon = useResponsiveValue(SIZE_ICON, 60);
    const columnNumber = useResponsiveValue(CHECKPOINT_COLUMN, 4);
    const columnDockNumber = useResponsiveValue(CHECKPOINT_COLUMN_DOCK, 4);

    const { itemWidth, outerPadding } = this.calculateGridDimensions(
      screenCheckPoint,
      columnNumber
    );
    const itemHeight = this.calculateItemHeight(itemWidth);
    const rowsNumber = this.calculateRowsNumber(
      heightStatusBar,
      heightPagination,
      heightDock,
      itemHeight
    );

    const widthDock = this.calculateDockWidth(
      sizeIcon,
      outerPadding,
      columnDockNumber
    );

    return {
      screenCheckPoint,

      heightStatusBar,
      heightPagination,
      heightDock,
      heightDockContainer,

      sizeIcon,
      columnDockNumber,
      columnNumber,
      rowsNumber,
      itemWidth,
      itemHeight,
      outerPadding,

      widthDock,

      device: this.device(),
    };
  }

  private calculateItemHeight(itemWidth: number): number {
    return itemWidth * 1.1;
  }

  private calculateRowsNumber(
    heightStatusBar: number,
    heightPagination: number,
    heightDock: number,
    itemHeight: number
  ): number {
    return Math.floor(
      (innerHeight - heightStatusBar - heightPagination - heightDock) /
        itemHeight
    );
  }

  private calculateDockWidth(
    sizeIcon: number,
    outerPadding: number,
    columnDockNumber: number
  ): number {
    return this.device() === Device.MOBILE
      ? innerWidth - outerPadding * 2
      : columnDockNumber * sizeIcon +
          columnDockNumber * outerPadding +
          outerPadding;
  }

  private calculateGridDimensions(
    screenCheckPoint: number,
    columnNumber: number
  ): {
    itemWidth: number;
    outerPadding: number;
  } {
    const factor = 20;
    const outerPadding = screenCheckPoint / (columnNumber * factor);
    const gridGap = outerPadding;
    const totalPadding = 2 * outerPadding + (columnNumber - 1) * gridGap;
    const itemWidth = (screenCheckPoint - totalPadding) / columnNumber;
    return {
      itemWidth,
      outerPadding: totalPadding / 2,
    };
  }
  // Phương thức này trả về layout sau khi đã tính toán
  getLayout(): LayoutProps {
    return this.calculateLayout();
  }
}
