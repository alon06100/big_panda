const mongoose = require('mongoose');

const { Schema } = mongoose;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Comment = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: [validateEmail, 'Please provide valid email address'],
  },
  message: String,
},
{
  timestamps: { createdAt: 'dateCreated' },
});

module.exports = mongoose.model('Comment', Comment);
