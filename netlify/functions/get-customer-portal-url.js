require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { customer } = JSON.parse(event.body);

    const portalData = await stripe.billingPortal.sessions.create({
      customer,
      return_url: "http://localhost:8888/my-account",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        portalData,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: error.message }),
    };
  }
};
