import { ObjectId } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

// Define the Status enum
enum Status {
  DRAFT = "draft",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export interface CampaignsEntity extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: Status;
  sequences : Array<ObjectId>;
}

const CampaignsSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(Status),
    required: true,
    default: Status.DRAFT,
  },
  sequences : {
    type : [ObjectId],
  }
},{
    versionKey : false, timestamps : true
});



export default mongoose.model<CampaignsEntity>('Campaign',CampaignsSchema);