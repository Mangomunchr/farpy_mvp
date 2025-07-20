import useRitualTrigger from '../hooks/useRitualTrigger';

export default function RunRitualButton({ id, summon }) {
  const run = async () => {
    const result = await useRitualTrigger(id, summon, 10);
    console.log('Ritual complete:', result);
  };

  return (
    <button
      onClick={run}
      className="bg-orange-600 hover:bg-orange-700 transition px-4 py-2 rounded text-white font-bold shadow-md"
    >
      RUN RITUAL 🔥
    </button>
  );
}
