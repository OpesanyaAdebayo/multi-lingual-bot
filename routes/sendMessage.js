const express = require('express');
const conversation = require('../utils/conversation');
const translator = require('../utils/translator');

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  translator.identify(message)
    .then((language) => {
      if (language === 'en') {
        conversation(message).then((response) => {
          res.json(response);
        }).catch(err => console.error(err));
      } else {
        translator.translate(message, language, 'en')
          .then(translatedText => conversation(translatedText))
          .then(response => translator.translate(response.output.text[0], 'en', language))
          .then(textFromWatson => res.json({ message: textFromWatson, language }))
          .catch(err => console.error(err));
      }
    })
    .catch(err => console.error(err));
});

module.exports = router;