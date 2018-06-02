const express = require('express');
const conversation = require('../utils/conversation');
const translator = require('../utils/translator');

let context = {};

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  conversation('', context).then((message) => {
    context = message.context;
    res.render('index', {
      title: 'Express',
      message: message.output.text[0],
    });
  }).catch(err => console.error(err));
});

router.post('/', (req, res) => {
  const { message } = req.body;
  translator.identify(message)
    .then((language) => {
      if (language === 'en') {
        conversation(message, context).then((response) => {
          res.json(response);
        }).catch(err => console.error(err));
      } else {
        translator.translate(message, language, 'en')
          .then(translatedText => conversation(translatedText, context))
          .then(response => translator.translate(response.output.text[0], 'en', language))
          .then(textFromWatson => res.json(textFromWatson))
          .catch(err => console.error(err));
      }
    })
    .catch(err => console.error(err));
});

module.exports = router;
