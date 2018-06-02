const { assistant } = require('./watsonConnections');

let context = {};

const sendMessage = message => new Promise((resolve, reject) => {
  assistant.message({
    workspace_id: process.env.WATSON_ASSISTANT_WORKSPACE_ID,
    input: {
      text: message,
    },
    context,
  }, (err, response) => {
    if (err) {
      return reject(Error(err));
    }
    ({ context } = response);
    return resolve(response);
  });
});

module.exports = sendMessage;
