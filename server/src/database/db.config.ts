import mongoose from "mongoose";

const MongoDB_URI = process.env.MONGODB_URI


if(!MongoDB_URI) throw new Error("MongoDB URI is undefined !!!")
const MongoDBConnection = mongoose.connect(MongoDB_URI, {
    // dbName: "email_market",
})

export default MongoDBConnection;