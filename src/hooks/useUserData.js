import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUserData(id) {
  const [user, setUser] = useState(null);

  const load = async () => {
    const res = await axios.get(`http://localhost:7777/user/${id}`);
    setUser(res.data);
  };

  const giveXP = async (delta = 50) => {
    const res = await axios.post(`http://localhost:7777/user/${id}/xp`, { delta });
    setUser(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return { user, giveXP };
}
