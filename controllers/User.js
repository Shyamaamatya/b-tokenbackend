const User = require("../models/User")

exports.createUser = (req, res) =>{
    console.log("req.body",req.body)
   User.create(req.body)
    .then(()=>{
        res.status(201).json({"status":"success",mesage:"user registered"})
    })
    .catch((error) => {
        return res.status(500).send({
          status: "error",
          message: error.message,
        });
      });
}

exports.getUser = (req, res) =>{
    console.log("kucj")
    res.send("user saved")
}