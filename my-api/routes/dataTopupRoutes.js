const express = require("express");
const router = express.Router();
const DataTopup = require("../controllers/dataTopupController");


router.get("/datatopup", DataTopup.getAllDataTopups);
router.get("/datatopup/:id", DataTopup.getDataTopupById);
router.post("/datatopup", DataTopup.createDataTopup);
router.put("/datatopup/:id", DataTopup.updateDataTopup);
router.delete("/datatopup/:id", DataTopup.deleteDataTopup);

module.exports = router;
