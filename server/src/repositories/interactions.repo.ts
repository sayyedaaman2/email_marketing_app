import { ObjectId } from "mongodb";
import interactionModel, {
  InteractionsEntity,
} from "../entities/interactions.entity";

export default class InteractionsRepo {
  public static create(data: InteractionsEntity) {
    return interactionModel.create(data);
  }

  public static update(data: InteractionsEntity, id: ObjectId) {
    return interactionModel.findByIdAndUpdate(id, data, { new: true });
  }

  public static delete(id: ObjectId) {
    return interactionModel.findByIdAndDelete(id);
  }

  public static findById(id: ObjectId) {
    return interactionModel.findById(id);
  }

  public static findAll() {
    return interactionModel.find();
  }
}
