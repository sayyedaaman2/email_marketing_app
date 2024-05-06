import { ObjectId } from "mongodb";
import InteractionRepo from "../repositories/interactions.repo";

export default class InteractionService {
  public static async addInteraction(requestPayload: any) {
    await InteractionRepo.create(requestPayload);
    return "success";
  }

  public static async updateInteraction(requestPayload: any, id: ObjectId) {
    await InteractionRepo.update(requestPayload, id);
    return "success";
  }
  public static async deleteInteraction(id: ObjectId) {
    await InteractionRepo.delete(id);
    return "success";
  }
  public static async findByIdInteraction(id: ObjectId) {
    return await InteractionRepo.findById(id);
   
  }
  public static async findAllInteractions() {
    return await InteractionRepo.findAll();
  }
}
