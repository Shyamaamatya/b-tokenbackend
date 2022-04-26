const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
    {
      from: {
        type: String,
        required: true,
      },
  
      to: {
          type: Schema.ObjectId,
          ref: "User",
          required: true,
        },

    title: {
        type: String,
        required: true,
        },

    message: {
        type: String,
        required: true,
        },
  
       
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Notification", notificationSchema);