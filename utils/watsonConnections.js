const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

const languageTranslator = new LanguageTranslatorV2({
  username: process.env.WATSON_LANGUAGE_TRANSLATOR_USERNAME,
  password: process.env.WATSON_LANGUAGE_TRANSLATOR_PASSWORD,
  url: 'https://gateway.watsonplatform.net/language-translator/api/',
});

const assistant = new AssistantV1({
  username: process.env.WATSON_ASSISTANT_USERNAME,
  password: process.env.WATSON_ASSISTANT_PASSWORD,
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16',
});

module.exports = {
  languageTranslator,
  assistant,
};
