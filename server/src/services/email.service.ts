import { ObjectId } from "mongodb";
import EmailRepo from "../repositories/email.repo";

export default class EmailService {
  public static async addEmail(requestPayload: any) {
    await EmailRepo.create(requestPayload);
    return "success";
  }

  public static async updateEmail(requestPayload: any, id: ObjectId) {
    await EmailRepo.update(requestPayload, id);
    return "success";
  }
  public static async deleteEmail(id: ObjectId) {
    await EmailRepo.delete(id);
    return "success";
  }
  public static async findByIdEmail(id: ObjectId) {
    return await EmailRepo.findById(id);
  }
  public static async findAllEmails() {
    return await EmailRepo.findAll();
  }
}
