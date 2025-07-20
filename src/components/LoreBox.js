
export default function LoreBox({ title = '🧠 Lore', message }) {
  return (
    <div className="mt-6 p-4 border border-noxo-accent bg-[#121212] text-sm rounded-lg text-noxo-primary shadow">
      <h3 className="font-semibold mb-2 text-noxo-accent">{title}</h3>
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}
