const express = require("express");
const router = express.Router();
const PhoneTopup = require("../controllers/phoneTopupController");


// Bảo vệ bằng JWT
router.get("/phonetopup", PhoneTopup.getAllTopups);
router.get("/phonetopup/:id", PhoneTopup.getTopupById);
router.post("/phonetopup", PhoneTopup.createTopup);
router.put("/phonetopup/:id", PhoneTopup.updateTopup);
router.delete("/phonetopup/:id", PhoneTopup.deleteTopup);

module.exports = router;
