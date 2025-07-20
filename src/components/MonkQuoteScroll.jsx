
import React from 'react';

const quotes = [
  "The Vault remembers what you burn.",
  "Silence is loyalty. Uptime is honor.",
  "The Core grows in shadows, not in noise.",
  "Ritual over reaction. Pattern over panic.",
  "Even dragons fall when we swarm."
];

function MonkQuoteScroll() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="bg-zinc-950 p-3 rounded-xl text-zinc-300 italic text-sm text-center border border-zinc-700">
      “{randomQuote}”
    </div>
  );
}

export default MonkQuoteScroll;
