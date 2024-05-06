import { ObjectId } from "mongodb";
import mongoose,{Schema,Document} from "mongoose";

export interface SubscriberEntity extends Document{
    email : string;
    firstName : string;
    lastName : string;
    subscriptions : Array<ObjectId>;
}


const SubscriberSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value: string) {
                // Regular expression for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format'
        }
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    subscriptions: {
        type: [ObjectId]
    }
}, {
    versionKey: false,
    timestamps: true,
});


export default mongoose.model<SubscriberEntity>('Subscriber',SubscriberSchema);