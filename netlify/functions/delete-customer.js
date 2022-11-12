require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { retrievedCustomerId } = JSON.parse(event.body);

    await stripe.customers.del(retrievedCustomerId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        customerDeleted: true,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errorMessage: error.code }),
    };
  }
};
