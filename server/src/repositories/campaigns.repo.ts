import { ObjectId } from "mongodb";
import campaignsModel, { CampaignsEntity } from "../entities/campaigns.entity";

export default class CampaignRepo {
  public static create(data: CampaignsEntity) {
    return campaignsModel.create(data);
  }

  public static update(data: CampaignsEntity, id: ObjectId) {
    return campaignsModel.findByIdAndUpdate(id, data, { new: true });
  }

  public static delete(id: ObjectId) {
    return campaignsModel.findByIdAndDelete(id);
  }

  public static findById(id: ObjectId) {
    return campaignsModel.findById(id);
  }

  public static findAll() {
    return campaignsModel.find();
  }
}
