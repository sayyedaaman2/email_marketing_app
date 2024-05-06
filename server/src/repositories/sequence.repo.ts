import { ObjectId } from "mongodb";
import sequencesModel, { SequencesEntity } from "../entities/sequences.entity";

export default class SequencesRepo {
  public static create(data: SequencesEntity) {
    return sequencesModel.create(data);
  }

  public static update(data: SequencesEntity, id: ObjectId) {
    return sequencesModel.findByIdAndUpdate(id, data, { new: true });
  }

  public static delete(id: ObjectId) {
    return sequencesModel.findByIdAndDelete(id);
  }

  public static findById(id: ObjectId) {
    return sequencesModel.findById(id);
  }

  public static findAll() {
    return sequencesModel.find();
  }
}
