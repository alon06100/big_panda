const express = require('express');

const router = express.Router();
const commentCtrl = require('../controllers/comment');

const catcher = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    res.status(e.statusCode || 500).send({ msg: e.message });
  }
};

router.get('/', catcher((req, res) => {
  res.json({ success: true });
}));

router.get('/comment', catcher(async (req, res) => {
  const { email } = req.query;
  const result = await commentCtrl.get(email);
  res.json(result);
}));

router.get('/comment/recent', catcher(async (req, res) => {
  const { email } = req.query;
  const result = await commentCtrl.getDetails(email);
  res.json(result);
}));

router.post('/comment', catcher(async (req, res) => {
  const { email, message } = req.body;
  const result = await commentCtrl.create(email, message);
  res.json(result);
}));

module.exports = router;
