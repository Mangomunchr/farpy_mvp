
export default function PatchCard({ message, date, tag }) {
  return (
    <div className="border-l-4 pl-3 py-2 border-noxo-accent bg-[#111] mb-2 rounded">
      <div className="text-xs uppercase text-noxo-accent">{tag}</div>
      <div className="text-sm text-noxo-primary">{message}</div>
      <div className="text-xs opacity-40">{new Date(date).toLocaleDateString()}</div>
    </div>
  );
}
