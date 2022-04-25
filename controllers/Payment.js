const axios = require("axios").default;
exports.verifyPayment = (req, res) =>{
    
// let data = {
//     "token": "QUao9cqFzxPgvWJNi9aKac",
//     "amount": 1000
// };
let data = {
    "token": req.body.token,
    "amount": req.body.amount
};
// console.log("data", data)


let config = {
    headers: {'Authorization': 'Key test_secret_key_03d8c5e11949469f80e385d0d1a50e1d'}
};

axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
      res.status(200).json({status:"Success",mesage:"Payment Success",response})    })
    .catch(error => {
        console.log(error.message)
        res.status(400).json({"status":"Failure",error})
    });
  
  }