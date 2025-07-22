import { useState } from "react";

export default function CoolBeanCheckout() {
  const [amount, setAmount] = useState(500);

  const handleCheckout = () => {
    window.location.href = \`/checkout?beans=\${amount}\`; // Replace with Stripe checkout redirect logic
  };

  return (
    <div>
      <h4>Buy CoolBeans</h4>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={100}
      />
      <button onClick={handleCheckout}>Purchase with Stripe</button>
    </div>
  );
}
