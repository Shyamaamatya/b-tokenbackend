const { Router } = require("express")
const express = require("express")
const { createUser, getUser } = require("../controllers/User")
const routers = express.Router()
 routers.post("/", createUser)
 routers.get("/", getUser)

module.exports = routers