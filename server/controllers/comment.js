const Comment = require('../models/comment');

const create = (email, message) => {
  const comment = new Comment({
    email,
    message,
  });
  return comment.save();
};

const get = (email) => {
  const query = {};
  if (email) {
    query.email = new RegExp(email, 'i');
  }
  return Comment.find(query);
};

const getDetails = email => Comment.findOne({ email }, { message: 0 }).sort({ dateCreated: -1 });

module.exports = {
  create,
  get,
  getDetails,
};
