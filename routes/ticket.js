const express = require('express');
const { addTicket} = require('../controllers/network/ticketController');
const router = express.Router();

router.post('/add'  ,addTicket)


module.exports = router
