const express = require("express");
const {
  addTicket,
  getTicketList,
} = require("../controllers/network/ticketController");
const router = express.Router();

router.post("/add", addTicket);
router.get("/list", getTicketList);

module.exports = router;
