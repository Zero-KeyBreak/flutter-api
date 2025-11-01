import pool from "../config/db.js";

const Card = {
 getCard: async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM card");

    // Format lại ngày theo múi giờ Việt Nam
    const formattedRows = rows.map(card => ({
      ...card,
      issue_date: card.issue_date
        ? new Date(card.issue_date).toLocaleDateString('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' })
        : null,
      expiry_date: card.expiry_date
        ? new Date(card.expiry_date).toLocaleDateString('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' })
        : null,
    }));

    return res.status(200).json(formattedRows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
},

  getCardById : async (req,res) => {
    try {
       const [rows] = await pool.query(
        "SELECT * FROM card WHERE id_card = ?",
        [req.params.id]
       );
       return res.status(200).json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
  },
  createCard: async (req,res) => {
    try {
        let {
            number_card, 
            issue_date, 
            expiry_date,
            card_type,
            user_id
        } = req.body;
        issue_date = req.body.issue_date || new Date();
        expiry_date = req.body.expiry_date || new Date();


        const [result] = await pool.query(
            "INSERT INTO card (number_card, issue_date, expiry_date, card_type, user_id) VALUE (?,?,?,?,?)",
            [number_card,issue_date,expiry_date,card_type,user_id]
        );
        
        return res.status(200).json({message: "Card created successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
  },
  updateCard : async (req,res) => {
    try {
        let {
            number_card, 
            issue_date, 
            expiry_date,
            card_type,
        } = req.body;
         issue_date = req.body.issue_date || new Date();
        expiry_date = req.body.expiry_date || new Date();
        const [result] = await pool.query(
            "UPDATE card SET number_card = ?, issue_date = ?, expiry_date = ?, card_type = ? WHERE id_card = ?",
            [number_card,issue_date,expiry_date,card_type,req.params.id]
        );
        return res.status(200).json({message: "Card updated successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
  },
  deleteCard : async (req,res) => {
      try {
        const [result] = await pool.query(
            "DELETE FROM card WHERE id_card",
            [req.params.id]
        );
        return res.status(200).json({message: "Card deleted successfully"});
      } catch (error) {
        return res.status(500).json({message: error.message});
      }
  },
};

export default Card;