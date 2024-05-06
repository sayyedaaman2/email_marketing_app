import { ObjectId } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

enum NodeType {
    SENDEMAIL = 'Send Email',
    WAIT = 'Wait',
    DECISION = 'Decision',
}

interface Nodes {
    type: NodeType;
    parameters: Object;
    position: Object;
    connections: ObjectId[];
}

export interface SequencesEntity extends Document {
    campaignId: ObjectId;
    name: string;
    nodes: Nodes[];
}

const SequencesSchema: Schema = new Schema({
    campaignId: {
        type: ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nodes: {
        type: [new Schema<Nodes>({
            type: { type: String, enum: Object.values(NodeType), required: true },
            parameters: { type: Object, required: true },
            position: { type: Object, required: true },
            connections: { type: [ObjectId], required: true },
        })],
        validate: {
            validator: function(nodes: Nodes[]) {
                return nodes.length > 0;
            },
            message: 'Nodes array must not be empty'
        },
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model<SequencesEntity>('Sequences', SequencesSchema);
