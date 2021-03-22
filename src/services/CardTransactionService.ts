import pagarme from 'pagarme';

interface Request {
  card_holder_name: string;
  card_number: string;
  card_expiration_date: string;
  card_cvv: string;
  id: null | undefined | number;
}

class CardTransactionService {
  constructor() {}

  public async execute(card: Request): Promise<number> {
    try {
      let cardData = card.id;

      if (!card.id) {
        const client = await pagarme.client.connect({
          encryption_key: process.env.PAGARME_ENCRYPTION_KEY,
        });
        cardData = await client.security.encrypt(card);

        console.log(cardData);

        return cardData;
      }
    } catch (err) {
      // showError(err);
    } finally {
      // setLoading(false);
    }
  }
}

export default CardTransactionService;
