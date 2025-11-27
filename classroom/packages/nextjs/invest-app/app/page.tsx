import { InvestmentCard } from '@/components/InvestmentCard';

export default function Home() {
  const investments = [
    {
      id: 'a3f5e8c7-2d4b-4a9e-8f1c-5b3d7e9a2c1f',
      name: 'Tesouro Selic 2027',
      amount: 2500000,
      origin: 'Tesouro Direto',
      type: 'Título Público',
      category: 'Conservador',
      date: '2024-03-15',
      color: 'blue',
    },
    {
      id: 'd68e2287-35d4-4d1c-984e-ac6744c0d388',
      name: 'Tesouro Selic 2027',
      amount: 2500000,
      origin: 'Tesouro Direto',
      type: 'Título Público',
      category: 'Conservador',
      date: '2024-03-15',
      color: 'blue',
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-blue-600">💰</span> Meus Investimentos
          </h1>
          <p className="text-gray-600 mt-2">
            Acompanhe sua carteira de investimentos
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Total Investido
            </p>
            <p
              id="total-amount"
              className="text-3xl font-bold text-gray-800 mt-2"
            ></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Quantidade
            </p>
            <p
              id="total-assets"
              className="text-3xl font-bold text-gray-800 mt-2"
            >
              <span></span> ativos
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Tipos
            </p>
            <p id="total-types" className="text-3xl font-bold mt-2">
              <span></span> tipos
            </p>
          </div>
        </div>

        {/* Investment Cards */}
        <div
          id="investment-cards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Investment cards will be dynamically inserted here */}
          {investments.map((investment) => (
            <InvestmentCard key={investment.id} investment={investment} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2025 Meus Investimentos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
