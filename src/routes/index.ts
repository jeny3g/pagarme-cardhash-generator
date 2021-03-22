import { Router } from 'express';
import card from './card.routes';

const routes = Router();

routes.use('/card', card);

export default routes;
