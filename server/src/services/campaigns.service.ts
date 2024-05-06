import { ObjectId } from "mongodb";
import CampaignRepo from "../repositories/campaigns.repo";

export default class CampaignService {
  public static async addCampaign(requestPayload: any) {
    await CampaignRepo.create(requestPayload);
    return "success";
  }

  public static async updateCampaign(requestPayload: any, id: ObjectId) {
    await CampaignRepo.update(requestPayload, id);
    return "success";
  }
  public static async deleteCampaign(id: ObjectId) {
    await CampaignRepo.delete(id);
    return "success";
  }
  public static async findByIdCampaign(id: ObjectId) {
    return await CampaignRepo.findById(id);
    
  }
  public static async findAllCampaigns() {
    return await CampaignRepo.findAll();
  }
}
