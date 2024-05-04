import mongoose from "mongoose";


const MongoDB_URI = process.env.MONGODB_URI || "mongodb+srv://sayyedaaman9:usGwC1uv3mdaIMHG@cluster0.mjagopy.mongodb.net"
const MongoDBConnection = mongoose.connect(MongoDB_URI, {
    // dbName: "email_market",
})

export default MongoDBConnection;