import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const plans = [
  { name: 'Basic Plan – 10', price: 45, maxQRCodes: 10, productKey: 'prod_R0U50OnhbzSNSW' },
  { name: 'Starter Plan – 20', price: 75, maxQRCodes: 20, productKey: 'your_starter_plan_product_key' },
  { name: 'Growth Plan – 35', price: 99, maxQRCodes: 35, productKey: 'your_growth_plan_product_key' },
  { name: 'Standard Plan – 50', price: 135, maxQRCodes: 50, productKey: 'your_standard_plan_product_key' },
  { name: 'Pro Plan – 75', price: 175, maxQRCodes: 75, productKey: 'your_pro_plan_product_key' },
  { name: 'Ultimate Plan – 250', price: 399, maxQRCodes: 250, productKey: 'your_ultimate_plan_product_key' },
  { name: 'VIP', price: 599, maxQRCodes: 500, productKey: 'your_vip_plan_product_key' },
];

const features = [
  { name: 'QR Codes', getValue: (plan) => plan.maxQRCodes },
  { name: 'No Ads', getValue: () => <Check className="text-green-500 mx-auto" /> },
  { name: 'Help & Support', getValue: () => <Check className="text-green-500 mx-auto" /> },
  { name: 'QR Code Scans', getValue: (plan) => plan.name === 'Basic Plan – 10' ? '100 per day' : 'Unlimited' },
  { name: 'QR Code Expiration', getValue: () => 'Lifetime' },
  { name: 'Extras', getValue: () => <Check className="text-green-500 mx-auto" /> },
];

const SubscriptionPlans: React.FC<{ id: string }> = ({ id }) => {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (planName: string, productKey: string) => {
    setLoading(planName);
    setError(null);
    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
          productKey,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();

      if (!session || !session.id) {
        throw new Error('Invalid session data received from server');
      }

      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id={id} className="py-8 bg-gray-50">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-6">Pricing & Features</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr>
                <th className="py-2 px-1 bg-white"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-2 px-1 bg-white text-center">
                    <div className="bg-blue-100 rounded-full py-1 px-2 mb-1">
                      <h3 className="text-sm font-semibold text-blue-800">{plan.name}</h3>
                    </div>
                    <p className="text-lg font-bold text-blue-600">£{plan.price}<span className="text-xs text-gray-500">/mo</span></p>
                    <p className="text-xs text-gray-600">No Setup Fees</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-1 font-medium">{feature.name}</td>
                  {plans.map((plan) => (
                    <td key={`${plan.name}-${feature.name}`} className="py-2 px-1 text-center">
                      {feature.getValue(plan)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-2 px-1"></td>
                {plans.map((plan) => (
                  <td key={`${plan.name}-signup`} className="py-2 px-1 text-center">
                    <button
                      className="w-full bg-blue-600 text-white text-xs rounded-md py-1 px-2 hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50"
                      onClick={() => handleSubscribe(plan.name, plan.productKey)}
                      disabled={loading === plan.name}
                    >
                      {loading === plan.name ? 'Processing...' : 'Sign Up'}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>* Upon request for paid plans your dynamic and static QR Codes will be retained even after your subscription has ended, when all invoices have been paid and you have been a customer with us for at least 1 year.</p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;