
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/home', label: 'Home', emoji: '🏠' },
  { to: '/burn', label: 'Burn', emoji: '🔥' },
  { to: '/claim', label: 'Claim', emoji: '🎁' },
  { to: '/vault', label: 'Vault', emoji: '🍋' },
  { to: '/profile', label: 'Profile', emoji: '👤' },
  { to: '/leaderboard', label: 'Leaderboard', emoji: '🏆' },
  { to: '/patchnotes', label: 'Patch Notes', emoji: '📜' }
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-noxo-accent text-black px-2 py-1 rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? '✖' : '☰'}
      </button>
      <aside className={\`\${open ? 'block' : 'hidden'} sm:block fixed top-0 left-0 h-full w-48 bg-[#111] border-r border-noxo-accent text-noxo-primary z-40\`}>
        <div className="p-4 text-lg font-bold border-b border-noxo-accent">NOXO</div>
        <nav className="flex flex-col p-2 space-y-1 text-sm">
          {navItems.map(({ to, label, emoji }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                \`px-3 py-2 rounded hover:bg-noxo-accent/20 \${isActive ? 'bg-noxo-accent/30 font-bold' : ''}\`
              }
            >
              {emoji} {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
