import { ObjectId } from "mongodb";
import SubscriberRepo from "../repositories/subscribers.repo";

export default class SubscriberService {
  public static async addSubscriber(requestPayload: any) {
    await SubscriberRepo.create(requestPayload);
    return "success";
  }

  public static async updateSubscriber(requestPayload: any, id: ObjectId) {
    await SubscriberRepo.update(requestPayload, id);
    return "success";
  }
  public static async deleteSubscriber(id: ObjectId) {
    await SubscriberRepo.delete(id);
    return "success";
  }
  public static async findByIdSubscriber(id: ObjectId) {
    return await SubscriberRepo.findById(id);
  }
  public static async findAllSubscribers() {
    return await SubscriberRepo.findAll();
    
  }
}
