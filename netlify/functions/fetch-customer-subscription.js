require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { subscriptionId } = JSON.parse(event.body);

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        subscription,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: error.message }),
    };
  }
};
