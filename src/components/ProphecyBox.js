
export default function ProphecyBox({ message }) {
  return (
    <div className="mt-6 p-4 text-sm border border-noxo-accent bg-[#1a1a1a] text-noxo-primary rounded-lg italic">
      <p>📜 <span className="text-noxo-accent">Vault Prophecy:</span> {message}</p>
    </div>
  );
}
