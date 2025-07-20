import useVaultAPI from '../hooks/useVaultAPI';
import useRendarAPI from '../hooks/useRendarAPI';

export default function Home() {
  const { status, gainXP, mutateChaos } = useVaultAPI();
  const { data, submitJob } = useRendarAPI();

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded bg-zinc-800">
        <h2 className="text-xl font-bold mb-2">🧿 Vault</h2>
        {status && (
          <>
            <p>XP: {status.xp}</p>
            <p>Chaos: {status.chaosLevel.toFixed(3)}</p>
          </>
        )}
        <div className="mt-2 space-x-2">
          <button onClick={gainXP} className="px-3 py-1 bg-green-500 rounded">Gain XP</button>
          <button onClick={mutateChaos} className="px-3 py-1 bg-pink-500 rounded">Mutate</button>
        </div>
      </div>

      <div className="p-4 border rounded bg-zinc-800">
        <h2 className="text-xl font-bold mb-2">🎯 Rendar</h2>
        {data && (
          <>
            <p>Jobs: {data.jobsSubmitted}</p>
            <p>Succeeded: {data.jobsSucceeded}</p>
            <p>Failed: {data.jobsFailed}</p>
          </>
        )}
        <button onClick={submitJob} className="mt-2 px-3 py-1 bg-blue-500 rounded">Submit Job</button>
      </div>
    </div>
  );
}
