import { ObjectId } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

enum Status {
  DRAFT = "draft",
  SCHEDULED = "scheduled",
  SENT = "sent",
}

export interface EmailEntity extends Document {
  campaignId: ObjectId;
  subject: string;
  body: string;
  senderName: string;
  senderEmail: string;
  attachments: string[];
  scheduledTime: Date;
  status: Status;
}

const EmailSchema: Schema = new Schema(
  {
    campaignId: {
      type: ObjectId,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    senderEmail: {
      type: String,
      required: true,
    },
    attachments: {
      type: Array,
    },
    scheduledTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      required: true,
      default: Status.DRAFT,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


export default mongoose.model<EmailEntity>("Email",EmailSchema);
