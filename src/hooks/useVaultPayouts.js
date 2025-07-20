import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useVaultPayouts(amount = 1337) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7777/vaultcut/distribute?amount=${amount}`).then(res => {
      setData(res.data.payouts);
    });
  }, [amount]);

  return data;
}
