export enum Device {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}

export interface ILayoutCalculation {
  device: Device;
  screenCheckPoint: number;
  heightStatusBar: number;
  heightPagination: number;
  heightDock: number;
  heightDockContainer: number;
  widthDock: number;
  columnDockNumber: number;
  columnNumber: number;
  rowsNumber: number;
  sizeIcon: number;
  itemWidth: number;
  itemHeight: number;
  outerPadding: number;
}
