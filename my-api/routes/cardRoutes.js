const express = require("express");
const router = express.Router();
const Card = require("../controllers/cardController");

router.get('/card',Card.getCards);
router.get('/card/:id', Card.getCardsById);
router.post('/card', Card.createCards);
router.put('/card/:id', Card.updateCards);
router.delete('/card/:id', Card.deleteCards);

module.exports = router;