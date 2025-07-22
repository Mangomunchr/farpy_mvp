export default function FarpyLayout({ children }) {
  return (
    <div className="min-h-screen p-6 bg-farpy-background text-farpy-neon font-mono">
      <h1 className="text-3xl mb-6 text-farpy-accent">🔥 Farpy Live Portal</h1>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
