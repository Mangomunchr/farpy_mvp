import { useState } from "react";

export default function ChaosTokenReveal() {
  const [token, setToken] = useState("");

  const generate = () => {
    const chaos = Math.random().toString(36).substring(2, 10).toUpperCase();
    setToken("🔥 CHAOS-" + chaos);
  };

  return (
    <div className="text-center my-4">
      <button className="text-farpy-accent border border-farpy-accent px-4 py-2 rounded" onClick={generate}>
        Summon Chaos Token
      </button>
      {token && <p className="mt-2 text-xl animate-bounce">{token}</p>}
    </div>
  );
}
