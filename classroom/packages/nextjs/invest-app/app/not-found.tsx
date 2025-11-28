import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-8xl">😕</span>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>

        <p className="text-2xl font-semibold text-gray-700 mb-6">
          Oxente! Página não encontrada
        </p>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
