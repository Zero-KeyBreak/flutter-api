import Card from '../models/cardModel.js';

const getCards = async (req,res) =>{
    try {
        await Card.getCard(req,res);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getCardsById = async (req,res) => {
    try {
      await Card.getCardById(req,res);  
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const createCards = async (req,res) => {
    try {
        await Card.createCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
};

const updateCards = async (req,res) => {
    try {
        await Card.updateCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
};

const deleteCards = async (req,res) => {
    try {
        await Card.deleteCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
}

export default {
    getCards,
    getCardsById,
    createCards,
    updateCards,
    deleteCards
}