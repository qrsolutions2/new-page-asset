import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { planName, productKey } = req.body;

      // Retrieve the price ID for the given product
      const prices = await stripe.prices.list({
        product: productKey,
        active: true,
        limit: 1,
      });

      if (prices.data.length === 0) {
        return res.status(400).json({ error: 'No active price found for the given product' });
      }

      const priceId = prices.data[0].id;

      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.DOMAIN}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error('Stripe API error:', err);
      res.status(500).json({ error: err.message || 'An unexpected error occurred' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}