export const INFRASTRUCTURE = {
  DATA_SOURCE_SERVICE: Symbol.for("DataSourceService"),
  IN_MEMORY_STORAGE_SERVICE: Symbol.for("InMemoryStorageService"),
  LAYOUT_CALCULATION_SERVICE: Symbol.for("LayoutCalculationService"),
  LAYOUT_CALCULATION_ENGINE: Symbol.for("LayoutCalculationEngine"),
};

export const APPLICATION = {
  GET_LAYOUT_CALCULATION_USE_CASE: Symbol.for("GetLayoutCalculationUseCase"),
  LOAD_LAYOUT_CALCULATION_USE_CASE: Symbol.for("LoadLayoutCalculationUseCase"),
};
