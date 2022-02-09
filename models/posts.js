const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('posts', PostSchema);