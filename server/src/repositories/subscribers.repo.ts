import { ObjectId } from "mongodb";
import subscribersModel, {
  SubscriberEntity,
} from "../entities/subscribers.entity";

export default class SubscribersRepo {
  public static create(data: SubscriberEntity) {
    return subscribersModel.create(data);
  }

  public static update(data: SubscriberEntity, id: ObjectId) {
    return subscribersModel.findByIdAndUpdate(id, data, { new: true });
  }

  public static delete(id: ObjectId) {
    return subscribersModel.findByIdAndDelete(id);
  }

  public static findById(id: ObjectId) {
    return subscribersModel.findById(id);
  }

  public static findAll() {
    return subscribersModel.find();
  }
}
