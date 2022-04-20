const Token = require("../models/Token");
// const uuid = require("uuid");
const { v4: uuidv4 } = require("uuid");


exports.createToken = (req, res) => {
  const code = uuidv4();
const time = req.body.time;
  const user = req.body.user;
  Token.create({ code, user, time })
    .then(() => {
      res.status(201).json({ status: "success", mesage: "Token saved." });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: error.message,
      });
    });
};

exports.getToken = (req, res) => {
  Token.findById(req.params.id)
    .then((token) => {
      res.status(200).json({ status: "success", token });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: error.message,
      });
    });
};

exports.getUsersToken = (req, res) => {
  Token.find({ user: req.params.id })
    .then((token) => {
      res.status(200).json({ status: "success", token });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: error.message,
      });
    });
};

exports.getAllUsersToken = (req, res) => {
    Token.find({ })
      .then((token) => {
        res.status(200).json({ status: "success", token });
      })
      .catch((error) => {
        return res.status(500).send({
          status: "error",
          message: error.message,
        });
      });
  };
