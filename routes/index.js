const express = require('express');
const conversation = require('../utils/conversation');

let context = {};

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  conversation('', context).then((message) => {
    res.render('index', {
      title: 'Express',
      message: message.output.text[0],
    });
  }).catch(err => console.error(err));
});

module.exports = router;
