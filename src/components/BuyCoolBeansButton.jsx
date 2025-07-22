import React from 'react';
import { getAuth } from 'firebase/auth';

const BuyCoolBeansButton = () => {
  const startCheckout = async () => {
    const user = getAuth().currentUser;
    if (!user) return alert("You must be logged in.");

    const res = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: user.uid, quantity: 1 })
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <button onClick={startCheckout} className="text-sm bg-yellow-500 text-black px-4 py-2 rounded">
      🫘 Buy 50 CoolBeans – $5
    </button>
  );
};

export default BuyCoolBeansButton;
