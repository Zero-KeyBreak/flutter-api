const Card = require("../models/cardModel");

exports.getCards = async (req,res) =>{
    try {
        await Card.getCard(req,res);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.getCardsById = async (req,res) => {
    try {
      await Card.getCardById(req,res);  
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.createCards = async (req,res) => {
    try {
        await Card.createCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
};

exports.updateCards = async (req,res) => {
    try {
        await Card.updateCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
};

exports.deleteCards = async (req,res) => {
    try {
        await Card.deleteCard(req,res);
    } catch (error) {
          return res.status(500).json({message: error.message});
    }
}