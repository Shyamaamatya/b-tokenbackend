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
console.log(data)


let config = {
    headers: {'Authorization': 'Key test_secret_key_f59e8b7d18b4499ca40f68195a846e9b'}
};

axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
      res.status(200).json({status:"Success",mesage:"Payment Success",response})    })
    .catch(error => {
        res.status(400).json({"status":"Failure",error})
    });
  
  }