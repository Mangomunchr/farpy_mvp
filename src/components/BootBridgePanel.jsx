import useBootFlag from '../hooks/useBootFlag';

export default function BootBridgePanel() {
  const { booted, trigger } = useBootFlag();

  return (
    <div className="p-4 border rounded bg-lime-900 text-lime-200 text-center">
      <h2 className="text-xl font-bold mb-2">🚀 Boot Sequence</h2>
      {booted ? (
        <p className="text-lime-300">🟢 System Live</p>
      ) : (
        <>
          <p className="mb-2 text-red-300">System not booted.</p>
          <button onClick={trigger} className="bg-lime-600 px-4 py-1 rounded">
            Initiate Boot
          </button>
        </>
      )}
    </div>
  );
}
