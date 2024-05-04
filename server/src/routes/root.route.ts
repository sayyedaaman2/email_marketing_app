import { Request, Response, Router } from "express";

// All Root Routes (Resources)






// Root Routes all the resources

const RootRoute = Router();

RootRoute.get("/",(req:Request,res:Response)=>{
        res.status(200).send({success : true,
            message : "testing api"
        })
})

export default RootRoute;