const { Router } = require("express")
const express = require("express")
const { createUser, getUser, LoginUser } = require("../controllers/User")
const routers = express.Router()
 routers.post("/", createUser)
 routers.get("/:id", getUser)
 routers.post("/login", LoginUser)

module.exports = routers