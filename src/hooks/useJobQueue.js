import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useJobQueue(id) {
  const [jobs, setJobs] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:7777/jobs/user/${id}`);
    setJobs(res.data);
  };

  const submit = async () => {
    await axios.post('http://localhost:7777/jobs/submit', { id });
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return { jobs, submit };
}
