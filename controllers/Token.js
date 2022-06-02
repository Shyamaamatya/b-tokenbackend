const Token = require('../models/Token')
const Notification = require('../models/Notification')
// const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid')

exports.createToken = (req, res) => {
  const code = uuidv4()
  const time = req.body.time
  const lineNumber = req.body.lineNumber
  console.log(time)
  const user = req.body.user
  const purpose = req.body.purpose
  Token.find({ time: time, lineNumber: lineNumber })
    .then((response) => {
      if (response.length) {
        res
          .status(400)
          .json({
            status: 'failure',
            message: 'Token not available for this time.',
          })
      } else {
        Token.create({ code, user, time, lineNumber, purpose })
          .then((token) => {
            console.log(token)
            Notification.create({
              to: user,
              from: 'admin',
              title: 'New Token Created',
              message: `New token created for ${time}`,
            })
              .then(() => {
                res
                  .status(201)
                  .json({ status: 'success', message: 'Token saved.', token })
              })
              .catch((error) => {
                return res.status(500).send({
                  status: 'error',
                  message: error.message,
                })
              })
          })
          .catch((error) => {
            return res.status(500).send({
              status: 'error',
              message: error.message,
            })
          })
      }
    })
    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.getToken = (req, res) => {
  Token.findById(req.params.id)
    .then((token) => {
      res.status(200).json({ status: 'success', token })
    })
    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.quitToken = (req, res) => {
  Token.findById(req.params.id)
    .then((token) => {
      token
        .updateOne({ status: 'Quit' })
        .then((token) => {
          res.status(200).json({ status: 'success', token })
        })
        .catch((error) => {
          return res.status(500).send({
            status: 'error',
            message: error.message,
          })
        })
    })
    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.getUsersToken = (req, res) => {
  Token.find({ user: req.params.id })
    .then((token) => {
      res.status(200).json({ status: 'success', token })
    })

    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.getAllUsersToken = (req, res) => {
  Token.find({})
    .then((token) => {
      res.status(200).json({ status: 'success', token })
    })
    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}
