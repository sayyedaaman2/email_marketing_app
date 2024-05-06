import path from 'path';
import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';

// Enviroment Variables 
try {
    if(process.env.NODE_ENV == 'production'){
        dotenv.config({ path: path.resolve(__dirname,'../.env.production') });

    }else{
        dotenv.config();
    }
    console.log('Loaded environment variables from .env.production:', process.env.NODE_ENV);
    console.log(process.env.MONGODB_URI)
} catch (error) {
    console.error('Error loading environment variables:', error);
}





import RootRoute from './routes/root.route';
import MongoDBConnection from './database/db.config';


const app = express();



app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());



//Root Route
app.use("/",RootRoute);

MongoDBConnection.then(() => {
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port :  ${process.env.PORT}`)
    })
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
    throw new Error(error);
});



