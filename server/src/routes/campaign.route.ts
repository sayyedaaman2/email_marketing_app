import { Request, Response, Router } from 'express';
import CampaignService from '../services/campaigns.service';
import { CampaignRequestPayload } from '../request/campaign.request';
import { ObjectId } from 'mongodb';

const CampaignsRouter = Router();

CampaignsRouter.post('/create', async (req: Request, res: Response) => {
    res.status(201).send(await CampaignService.addCampaign(req.body as CampaignRequestPayload));
});

CampaignsRouter.put('/update/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await CampaignService.updateCampaign(req.body as CampaignRequestPayload, id));
});

CampaignsRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await CampaignService.deleteCampaign(id));
});

CampaignsRouter.get('/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await CampaignService.findByIdCampaign(id));
});

CampaignsRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await CampaignService.findAllCampaigns());
});

export default CampaignsRouter;
