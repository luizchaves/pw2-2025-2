'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/useToast';

export function NavBar() {
  const { user, isAuthenticated, signOut } = useAuth();
  const { showToast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      showToast('Desconectado com sucesso!', 'success');
    } catch (error) {
      showToast('Erro ao desconectar', 'error');
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Title */}
          <Link
            href={isAuthenticated ? '/investments' : '/'}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">💰</span>
            <h1 className="text-2xl font-bold text-gray-800">
              Invest<span className="text-blue-600">App</span>
            </h1>
          </Link>

          {/* Menu */}
          <ul className="flex gap-8 items-center">
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    href="/investments"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  >
                    Investimentos
                  </Link>
                </li>
                <li className="text-gray-600 text-sm">
                  {user?.email}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Cadastro
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
