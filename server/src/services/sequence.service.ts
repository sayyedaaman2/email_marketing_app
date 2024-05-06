import { ObjectId } from "mongodb";
import SequencesRepo from "../repositories/sequence.repo";

export default class SequenceService {
  public static async addSequence(requestPayload: any) {
    await SequencesRepo.create(requestPayload);
    return "success";
  }

  public static async updateSequence(requestPayload: any, id: ObjectId) {
    await SequencesRepo.update(requestPayload, id);
    return "success";
  }
  public static async deleteSequence(id: ObjectId) {
    await SequencesRepo.delete(id);
    return "success";
  }
  public static async findByIdSequence(id: ObjectId) {
    return await SequencesRepo.findById(id);
    
  }
  public static async findAllSequences() {
    return await SequencesRepo.findAll();
  }
}
