import { ObjectId } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

enum Type {
    IDLE = 'idle',
    OPEN = 'open',
    CLICK = 'click',
}

export interface InteractionsEntity extends Document {
    emailId: ObjectId;
    subscriberId: ObjectId;
    type: Type;
    timestamp: Date;
    ip_address?: string;
    device?: string;
    location?: {
        cordinateX: string;
        cordinateY: string;
    };
}

const InteractionSchema: Schema = new Schema({
    emailId: {
        type: ObjectId,
        required: true,
    },
    subscriberId: {
        type: ObjectId,
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(Type),
        required: true,
        default: Type.IDLE,
    },
    ip_address: {
        type: String,
    },
    device: {
        type: String,
    },
    location: {
        type: {
            cordinateX: String,
            cordinateY: String,
        },
    },
});

export default mongoose.model<InteractionsEntity>('Interaction', InteractionSchema);
