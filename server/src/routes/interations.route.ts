import { Request, Response, Router } from 'express';
import InteractionService from '../services/interaction.service';
import { InteractionRequestPayload } from '../request/interaction.request';
import { ObjectId } from 'mongodb';

const InteractionsRouter = Router();

InteractionsRouter.post('/create', async (req: Request, res: Response) => {
    res.status(201).send(await InteractionService.addInteraction(req.body as InteractionRequestPayload));
});

InteractionsRouter.put('/update/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await InteractionService.updateInteraction(req.body as InteractionRequestPayload, id));
});

InteractionsRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await InteractionService.deleteInteraction(id));
});

InteractionsRouter.get('/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await InteractionService.findByIdInteraction(id));
});

InteractionsRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await InteractionService.findAllInteractions());
});

export default InteractionsRouter;
