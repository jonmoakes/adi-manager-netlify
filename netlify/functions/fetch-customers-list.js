require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async () => {
  try {
    const customers = await stripe.customers.list({});
    return {
      statusCode: 200,
      body: JSON.stringify(customers),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
