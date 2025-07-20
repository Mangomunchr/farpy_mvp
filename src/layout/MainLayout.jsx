import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen p-6 bg-neutral-900 text-white">
      <h1 className="text-3xl font-bold mb-6">🧿 Vault Interface</h1>
      <Outlet />
    </div>
  );
}
