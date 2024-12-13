const stripe = require("stripe")("sk_test_51QDPsnRtCZ6RGxkBGFelxoPcqL1A3bcjsauBSBGUuTZI62J3QzDyvbKaQNYjwUiElF2Y52Jfa21ySLZcI2BvpxUm00G6joJd6b");
const { v4: uuidv4 } = require("uuid");

exports.processPayment = async (req, res) => {
  const { product, token } = req.body;

  try {
    const idempotencyKey = uuidv4();

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      },
      { idempotencyKey }
    );

    res.status(200).json(charge);
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Payment failed" });
  }
};