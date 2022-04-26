const { Router } = require("express")
const express = require("express")
const { getNotification,  } = require("../controllers/notification")
const routers = express.Router()
 routers.get("/:user", getNotification)
 


module.exports = routers