import { injectable } from "inversify";
import { DataSourcePort } from "./data-source.port";
@injectable()
export class DataSourceService implements DataSourcePort {
  constructor() {}

  fetchAll(): void {}
}
