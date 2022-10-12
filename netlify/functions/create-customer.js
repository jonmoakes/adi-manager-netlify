require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      description: req.body.description,
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
