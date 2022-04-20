const { Router } = require("express")
const express = require("express")
const { createToken, getToken, getUsersToken, getAllUsersToken } = require("../controllers/Token")
const routers = express.Router()
 routers.post("/", createToken)
 routers.get("/", getAllUsersToken)
 routers.get("/:id", getToken)
 routers.get("/user/:id", getUsersToken)


module.exports = routers