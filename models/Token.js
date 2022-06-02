const mongoose = require('mongoose')
const { stringify } = require('qs')
const Schema = mongoose.Schema

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
      ref: 'User',
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    lineNumber: {
      type: Number,
      required: true,
      default: 1,
    },

    purpose: {
      type: String,
      default: 'Saving',
    },

    status: {
      type: String,
      default: 'On line',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Token', tokenSchema)
