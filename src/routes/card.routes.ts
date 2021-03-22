import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CardTransactionService from '../services/CardTransactionService';

const cardRouter = Router();

cardRouter.get('/', (request, response) => {
  response.json({ cardhash: 'online' });
});

cardRouter.post('/', async (request, response) => {
  try {
    const {
      card_holder_name,
      card_number,
      card_expiration_date,
      card_cvv,
      id,
    } = request.body;

    const createCardHash = new CardTransactionService();

    const cardHash = await createCardHash.execute({
      card_holder_name,
      card_number,
      card_expiration_date,
      card_cvv,
      id,
    });


    return response.json({ cardHash });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default cardRouter;
