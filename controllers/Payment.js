const axios = require("axios");
var requestp= require('request-promise');
var SECRET_KEY = 'test_secret_key_03d8c5e11949469f80e385d0d1a50e1d'
const qs = require('qs');
const request = require('request');
exports.verifyPayment = (req, res) =>{


    
// let data = {
//     "token": "QUao9cqFzxPgvWJNi9aKac",
//     "amount": 1000
// };
// let data = {
//     "token": req.body.token,
//     "amount": req.body.amount
// };
// console.log("data", data)



// let config = {
//     headers: {
//         'Authorization': 'Key test_secret_key_03d8c5e11949469f80e385d0d1a50e1d',
//         "Content-Type": 'application/x-www-form-urlencoded'
// }
    
// };

// axios.post("https://khalti.com/api/v2/payment/verify/", qs.stringify(data), config)
//     .then(response => {
//       res.status(200).json({status:"Success",mesage:"Payment Success",response})    })
//     .catch(error => {
//         console.log(error.message)
//         res.status(400).json({"status":"Failure",error})
//     });

    // var KHALTI_VERIFY = 'https://khalti.com/api/v2/payment/verify/';
	// let options = {
	//   method: 'POST',
	//   uri: KHALTI_VERIFY,
	//   body: JSON.stringify({
	//     'token': req.body.token,
	//     'amount': req.body.amount
	//   }),
	//   headers: {
	//     "Authorization": `Key ${SECRET_KEY}`,
	//     "Content-Type": 'application/json'
	//   }
	// }
	// requestp(options)
	// .then((result)=>{
	//   console.log('charged', result);
	//     res.status(200).json({
	//       data: result,
	//       status: "success"
	//     });
	// })
	// .catch((error)=> {
	//   res.status(500).send({
	// 		error: error.response.data,
	// 		status: 'failed',
	// 	});
	// });

var data = qs.stringify({
  'amount': req.params.amount,
  'token': req.params.token
});
var config = {
  method: 'post',
  url: 'https://khalti.com/api/v2/payment/verify/',
  headers: { 
    'Authorization': 'Key test_secret_key_03d8c5e11949469f80e385d0d1a50e1d', 
    'Content-Type': 'application/x-www-form-urlencoded'},
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  
  }