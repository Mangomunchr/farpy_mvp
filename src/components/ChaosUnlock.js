
export default function ChaosUnlock({ unlocked, onUnlock }) {
  return (
    <div className="mt-8 text-center text-noxo-primary">
      {!unlocked ? (
        <>
          <p className="mb-2 text-sm italic text-noxo-accent">"Chaos sleeps... for now."</p>
          <button
            onClick={onUnlock}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded text-sm animate-pulse"
          >
            🔓 Awaken Chaos
          </button>
        </>
      ) : (
        <p className="text-red-500 font-bold">🧨 Chaos Unlocked!</p>
      )}
    </div>
  );
}
