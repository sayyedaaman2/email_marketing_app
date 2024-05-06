import { Request, Response, Router } from 'express';
import SubscriberService from '../services/subscriber.service';
import { SubscriberRequestPayload } from '../request/subscriber.request';
import { ObjectId } from 'mongodb';

const SubscribersRouter = Router();

SubscribersRouter.post('/create', async (req: Request, res: Response) => {
    res.status(201).send(await SubscriberService.addSubscriber(req.body as SubscriberRequestPayload));
});

SubscribersRouter.put('/update/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SubscriberService.updateSubscriber(req.body as SubscriberRequestPayload, id));
});

SubscribersRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SubscriberService.deleteSubscriber(id));
});

SubscribersRouter.get('/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SubscriberService.findByIdSubscriber(id));
});

SubscribersRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await SubscriberService.findAllSubscribers());
});

export default SubscribersRouter;
