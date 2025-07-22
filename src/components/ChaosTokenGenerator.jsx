import { useState } from "react";

export default function ChaosTokenGenerator({ xp = 0, beans = 0 }) {
  const [token, setToken] = useState("");

  const summon = () => {
    if (xp >= 1337 && beans >= 500) {
      const chaos = Math.random().toString(36).substring(2, 12).toUpperCase();
      setToken(\`CHAOS-\${chaos}\`);
    } else {
      setToken("☠️ Not worthy.");
    }
  };

  return (
    <div>
      <h4>Summon Chaos Token</h4>
      <button onClick={summon}>Generate</button>
      <p>{token}</p>
    </div>
  );
}
