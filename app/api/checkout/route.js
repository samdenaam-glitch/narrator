import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "VoxForge Pro" },
          unit_amount: 4900,
          recurring: { interval: "month" }
        },
        quantity: 1
      }
    ],
    mode: "subscription",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000"
  });

  return Response.json({ url: session.url });
}