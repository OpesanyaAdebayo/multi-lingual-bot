const { assistant } = require('./watsonConnections');

const sendMessage = (message, context) => new Promise((resolve, reject) => {
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
    return resolve(response);
  });
});

module.exports = sendMessage;
