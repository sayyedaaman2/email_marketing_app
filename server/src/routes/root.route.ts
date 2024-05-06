import { Request, Response, Router } from "express";

// All Root Routes (Resources)

import CampaignsRouter from "./campaign.route";
import EmailsRouter from "./email.route";
import SequencesRouter from "./sequences.route";
import SubscribersRouter from "./subscriber.route";
import InteractionsRouter from "./interations.route";




// Root Routes all the resources

const RootRoute = Router();

RootRoute.get("/",(req:Request,res:Response)=>{
        res.status(200).send({success : true,
            message : "testing api"
        })
})

RootRoute.use('/campaign',CampaignsRouter);
RootRoute.use('/email',EmailsRouter);
RootRoute.use('/sequences',SequencesRouter);
RootRoute.use('/subscriber', SubscribersRouter);
RootRoute.use('/interaction',InteractionsRouter);


export default RootRoute;