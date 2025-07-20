import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useRendarAPI() {
  const [data, setData] = useState(null);

  const fetch = async () => {
    const res = await axios.get('http://localhost:7777/rendar/status');
    setData(res.data);
  };

  const submitJob = async () => {
    const res = await axios.post('http://localhost:7777/rendar/submit');
    setData(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, submitJob };
}
