import { ObjectId } from "mongodb";
import emailModel, { EmailEntity } from "../entities/email.entity";

export default class EmailRepo {
  public static create(data: EmailEntity) {
    return emailModel.create(data);
  }

  public static update(data: EmailEntity, id: ObjectId) {
    return emailModel.findByIdAndUpdate(id, data, { new: true });
  }

  public static delete(id: ObjectId) {
    return emailModel.findByIdAndDelete(id);
  }

  public static findById(id: ObjectId) {
    return emailModel.findById(id);
  }

  public static findAll() {
    return emailModel.find();
  }
}
