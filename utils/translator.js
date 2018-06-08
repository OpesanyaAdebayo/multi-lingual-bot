const { languageTranslator } = require('./watsonConnections');

const translate = (text, source, target) => new Promise((resolve, reject) => {
  languageTranslator.translate(
    {
      text,
      source,
      target,
    },
    (err, translation) => {
      if (err) {
        return reject(err);
      }
      return resolve(translation.translations[0].translation);
    },
  );
});

const identify = text => new Promise((resolve, reject) => {
  languageTranslator.identify(
    {
      text,
    },
    (err, language) => {
      if (err) {
        return reject(Error(err));
      }
      return resolve(language.languages[0].language);
    },
  );
});

module.exports = { translate, identify };
