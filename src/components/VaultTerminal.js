
export default function VaultTerminal({ logs }) {
  return (
    <div className="bg-black text-green-400 font-mono text-xs p-4 rounded h-64 overflow-y-auto border border-noxo-accent">
      {logs.map((log, i) => (
        <div key={i}>
          ➜ [{new Date(log.created_at).toLocaleTimeString()}] {log.action} {log.value} MANGO
        </div>
      ))}
    </div>
  );
}
