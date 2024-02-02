const postmark = require("postmark");
const client = new postmark.ServerClient(
  process.env.REACT_APP_POSTMARK_API_KEY
);

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const response = await client.sendEmailWithTemplate({
      From: process.env.REACT_APP_APP_OWNER_EMAIL,
      To: process.env.REACT_APP_APP_OWNER_EMAIL,
      TemplateAlias: "send-contact-form-message-adi-manager",
      TemplateModel: {
        product_url: "https://www.solaris-apps.co.uk",
        product_name: "Solaris Apps",
        name,
        email,
        message,
      },
    });

    return {
      response,
      statusCode: 202,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

// const client = require("@sendgrid/mail");

// const sendEmail = (client, emailToSend) => {
//   return new Promise((resolve, reject) => {
//     const data = {
//       from: process.env.REACT_APP_OWNER_EMAIL,
//       subject: "Message From ADI Manager Contact Form",
//       to: process.env.REACT_APP_OWNER_EMAIL,
//       text: emailToSend,
//     };

//     client
//       .send(data)
//       .then(([response, body]) => {
//         resolve(response);
//       })
//       .catch((error) => reject(error));
//   });
// };

// exports.handler = (event, context, callback) => {
//   const body = JSON.parse(event.body);
//   const message = body.message;

//   client.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

//   sendEmail(client, message, process.env.REACT_APP_OWNER_EMAIL)
//     .then((response) => callback(null, { statusCode: response.statusCode }))
//     .catch((err) => callback(err, null));
// };
