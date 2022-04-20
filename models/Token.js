const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },

    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true,
      },

      time: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", tokenSchema);