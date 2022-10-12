require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { email, name } = JSON.parse(event.body);
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(customer),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};
