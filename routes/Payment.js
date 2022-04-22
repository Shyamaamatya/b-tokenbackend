const { Router } = require("express")
const express = require("express")
const { verifyPayment } = require("../controllers/Payment")
const routers = express.Router()
 routers.post("/verify", verifyPayment)
 
module.exports = routers