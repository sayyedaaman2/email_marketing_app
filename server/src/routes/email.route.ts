import { Request, Response, Router } from 'express';
import EmailService from '../services/email.service';
import { EmailRequestPayload } from '../request/email.request';
import { ObjectId } from 'mongodb';

const EmailsRouter = Router();

EmailsRouter.post('/create', async (req: Request, res: Response) => {
    res.status(201).send(await EmailService.addEmail(req.body as EmailRequestPayload));
});

EmailsRouter.put('/update/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await EmailService.updateEmail(req.body as EmailRequestPayload, id));
});

EmailsRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await EmailService.deleteEmail(id));
});

EmailsRouter.get('/:id', async (req: Request, res: Response) => {
    const id = new ObjectId(req.params.id);
    res.status(200).send(await EmailService.findByIdEmail(id));
});

EmailsRouter.get('/', async (req: Request, res: Response) => {
    res.status(200).send(await EmailService.findAllEmails());
});

export default EmailsRouter;
