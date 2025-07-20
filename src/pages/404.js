
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-noxo-primary flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-noxo-accent mb-6">404</h1>
      <p className="text-sm opacity-70 mb-4">This path is not part of the Vault.</p>
      <Link href="/home" className="text-noxo-accent text-sm underline">Return Home</Link>
    </div>
  );
}
