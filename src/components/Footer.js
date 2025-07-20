
export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t border-noxo-accent text-noxo-primary text-center py-4 text-xs">
      <p>© {new Date().getFullYear()} NOXO Network</p>
      <p className="mt-1 italic text-noxo-accent">"The vault watches in silence."</p>
    </footer>
  );
}
