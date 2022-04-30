const User = require('../models/User')
const { v4: uuidv4 } = require('uuid')

exports.createUser = (req, res) => {
  console.log('req.body', req.body)
  User.create(req.body)
    .then((data) => {
      console.log('////', data)
      res
        .status(201)
        .json({ status: 'success', data: data, mesage: 'user registered' })
    })
    .catch((error) => {
      console.log({ error })
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json({ status: 'success', user })
    })
    .catch((error) => {
      return res.status(500).send({
        status: 'error',
        message: error.message,
      })
    })
}

exports.LoginUser = (req, res) => {
  console.log('reqbody', req.body)
  User.find({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (user.length) {
        res.status(200).json({ status: 'success', user })
      } else {
        res.status(500).json({
          status: 'failure',
          message: 'Email or password is incorrect.',
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
