import { AggregateRoot } from "./aggregate.base";
import { UniqueEntityID } from "./unique-entity";

export class LayoutEntity extends AggregateRoot<any> {
  constructor() {
    super({
      id: new UniqueEntityID(), // Tạo ID mới
      createdAt: new Date(), // Thời gian tạo
      updatedAt: new Date(), // Thời gian cập nhật
      props: {},
    });
  }

  validate(): void {}
}
