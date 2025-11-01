import express from 'express';
const router = express.Router();
import Card from '../controllers/cardController.js';

router.get('/card',Card.getCards);
router.get('/card/:id', Card.getCardsById);
router.post('/card', Card.createCards);
router.put('/card/:id', Card.updateCards);
router.delete('/card/:id', Card.deleteCards);

export default router;