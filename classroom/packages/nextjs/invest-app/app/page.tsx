'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/investments');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-7xl mb-6">💰</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bem-vindo ao <span className="text-blue-600">InvestApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gerencie sua carteira de investimentos com facilidade e segurança.
            Organize, acompanhe e maximize seus investimentos em um único lugar.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Analítica</h3>
            <p className="text-gray-600">Visualize seus investimentos em tempo real</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Segurança</h3>
            <p className="text-gray-600">Seus dados protegidos com autenticação segura</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Rápido</h3>
            <p className="text-gray-600">Interface ágil e intuitiva</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all text-lg"
          >
            Entrar
          </Link>
          <Link
            href="/signup"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-all text-lg"
          >
            Criar Conta
          </Link>
        </div>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-12">
          © 2025 Meus Investimentos. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
