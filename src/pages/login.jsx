import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError(null);
    // TODO: Wire to Firebase Auth or backend
    alert("🌀 Logging in...");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-noxo-dark border border-noxo-accent rounded-lg">
        <h1 className="text-2xl font-bold text-noxo-primary mb-6 text-center">🧬 Farpy Access Portal</h1>
        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-noxo-primary text-black font-bold py-2 rounded hover:bg-white transition"
          >
            🔐 Enter
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">Only authorized Rendars and NodeMonks may enter.</p>
      </div>
    </div>
  );
}
