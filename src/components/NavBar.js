
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const NAV = [
  ['Home', '/home'],
  ['Burn', '/burn'],
  ['Claim', '/claim'],
  ['Vault', '/vault'],
  ['Journal', '/journal'],
  ['Lorebook', '/lorebook'],
  ['Chaos Gate', '/chaosgate'],
  ['Questboard', '/questboard'],
  ['NodeMonk', '/nodemonk'],
  ['Broadcast', '/broadcast'],
  ['Patch Notes', '/patches'],
  ['Leaderboard', '/rank'],
  ['NodeSoul', '/nodesoul'],
  ['FX Tuner', '/fxtuner'],
  ['Referrals', '/referrals'],
  ['Guardian Trial', '/guardian'],
  ['Duel', '/duel'],
  ['Metrics', '/metrics'],
  ['Admin', '/admin']
];

export default function NavBar() {
  const { session, logout } = useAuth();

  return (
    <nav className="bg-black border-b border-noxo-accent p-3 text-sm text-noxo-primary flex justify-between items-center">
      <div className="flex gap-3 flex-wrap">
        {NAV.map(([label, path]) => (
          <Link key={path} href={path} className="hover:text-noxo-accent">
            {label}
          </Link>
        ))}
      </div>
      {session && (
        <button onClick={logout} className="text-noxo-accent hover:underline">
          Logout
        </button>
      )}
    </nav>
  );
}
