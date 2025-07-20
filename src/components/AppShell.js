
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './Sidebar';

export default function AppShell({ children }) {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) navigate('/login');
  }, [session]);

  return (
    <div className="min-h-screen bg-black text-noxo-primary flex">
      <Sidebar />
      <div className="ml-0 sm:ml-48 flex-1 p-4">{children}</div>
    </div>
  );
}
