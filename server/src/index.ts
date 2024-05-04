import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import port from './configs/server.config'
import RootRoute from './routes/root.route';
import MongoDBConnection from './database/db.config';

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

dotenv.config();


//Root Route
app.use("/",RootRoute);
// console.log(process.env);

MongoDBConnection.then(() => {
    app.listen(port,()=>{
        console.log(`server is running on port :  ${port}`)
    })
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
    throw new Error(error);
});



