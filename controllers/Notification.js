const Notification =  require("../models/Notification")

exports.getNotification = (req, res) =>{
    Notification.find({"to":req.params.user})
    .then((notifications)=>{  
      res.status(200).json({"status":"success",notifications})
    })
    .catch((error) => {
        return res.status(500).send({
          status: "error",
          message: error.message,
        });
      });
  
  }