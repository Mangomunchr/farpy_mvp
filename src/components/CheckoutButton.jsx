
import React from 'react';

function CheckoutButton() {
  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/your_pre_mythic_url";
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl shadow-lg font-bold"
    >
      🔓 Join the Pre-Mythic Order — $9.99
    </button>
  );
}

export default CheckoutButton;
