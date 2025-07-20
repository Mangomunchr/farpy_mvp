import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vault = () => {
  const [vault, setVault] = useState(0);

  useEffect(() => {
    const fetchVault = async () => {
      const res = await axios.get('/api/vault');
      setVault(res.data.earnings);
    };
    fetchVault();
    const interval = setInterval(fetchVault, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto text-center text-white">
      <h1 className="text-4xl font-bold mb-4">💰 Vault Balance</h1>
      <div className="text-5xl font-mono text-green-400 bg-black border-2 border-green-600 p-6 rounded-lg shadow-lg inline-block">
        ${vault.toFixed(2)}
      </div>
      <p className="mt-4 text-gray-300">Every job adds value. NodeMonks feed here.</p>
    </div>
  );
};

export default Vault;
