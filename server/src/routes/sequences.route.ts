import { Request, Response, Router } from 'express';
import SequenceService from '../services/sequence.service';
import { SequenceRequestPayload } from '../request/sequence.request';
import { ObjectId } from 'mongodb';

const SequencesRouter = Router();

SequencesRouter.post('/create', async (req: Request, res: Response) => {
    res.status(201).send(await SequenceService.addSequence(req.body as SequenceRequestPayload));
});

SequencesRouter.put('/update/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SequenceService.updateSequence(req.body as SequenceRequestPayload, id));
});

SequencesRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SequenceService.deleteSequence(id));
});

SequencesRouter.get('/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await SequenceService.findByIdSequence(id));
});

SequencesRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await SequenceService.findAllSequences());
});

export default SequencesRouter;
