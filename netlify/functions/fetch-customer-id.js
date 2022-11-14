require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { customerId } = JSON.parse(event.body);

    const customer = await stripe.subscriptions.retrieve(customerId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        customer,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: error.message }),
    };
  }
};
