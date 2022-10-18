require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { displayName, email, paymentMethod, priceId } = JSON.parse(
      event.body
    );
    const customer = await stripe.customers.create({
      email,
      name: displayName,
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscription.id,
        customerId: subscription.customer,
        status: subscription.status,
      }),
    };
  } catch (error) {
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
