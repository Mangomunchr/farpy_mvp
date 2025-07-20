import axios from 'axios';

export default async function useRitualTrigger(id, summon = 1, baseXP = 10) {
  const res = await axios.post("http://localhost:7777/job/run", {
    id,
    summon,
    baseXP
  });
  return res.data;
}
