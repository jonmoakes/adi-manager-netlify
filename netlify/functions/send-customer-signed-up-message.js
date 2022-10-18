const client = require("@sendgrid/mail");

const sendEmail = (client, message) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: process.env.REACT_APP_OWNER_EMAIL,
      subject: "Thank You For Signing Up To The ADI Manager!",
      to: message.email,
      text: message.customerEmailToSend,
    };

    client
      .send(data)
      .then(([response, body]) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const message = body.message;

  client.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  sendEmail(client, message, process.env.REACT_APP_OWNER_EMAIL)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null));
};
