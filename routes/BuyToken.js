const { Router } = require("express")
const express = require("express")

const routers = express.Router()
 routers.post("/buy", buyToken)
 
module.exports = routers