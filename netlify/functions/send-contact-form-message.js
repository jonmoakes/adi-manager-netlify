const client = require("@sendgrid/mail");

const sendEmail = (client, emailToSend) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: process.env.REACT_APP_OWNER_EMAIL,
      subject: "Message From ADI Manager Contact Form",
      to: process.env.REACT_APP_OWNER_EMAIL,
      text: emailToSend,
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
