import axios from 'axios';

export default async function useXPReward(id, base = 10, summon = 1) {
  const res = await axios.post("http://localhost:7777/xp/reward", {
    id,
    base,
    summon
  });
  return res.data;
}
