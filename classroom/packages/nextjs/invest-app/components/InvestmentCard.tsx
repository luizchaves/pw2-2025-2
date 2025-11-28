import { cn } from '@/utils/cn';
import { formatCurrency, formatDate } from '@/utils/format';

interface Investment {
  id: string;
  name: string;
  amount: number;
  origin: string;
  type: string;
  category: string;
  date: string;
  color: string;
}

interface InvestmentCardProps {
  investment: Investment;
}

// Mapa de cores predefinidas para evitar classes dinâmicas não detectáveis
const colorClassMap: Record<string, { gradient: string; text: string }> = {
  blue: {
    gradient: 'bg-linear-to-r from-blue-500 to-blue-600',
    text: 'text-blue-100',
  },
  red: {
    gradient: 'bg-linear-to-r from-red-500 to-red-600',
    text: 'text-red-100',
  },
  green: {
    gradient: 'bg-linear-to-r from-green-500 to-green-600',
    text: 'text-green-100',
  },
  purple: {
    gradient: 'bg-linear-to-r from-purple-500 to-purple-600',
    text: 'text-purple-100',
  },
  yellow: {
    gradient: 'bg-linear-to-r from-yellow-500 to-yellow-600',
    text: 'text-yellow-100',
  },
  pink: {
    gradient: 'bg-linear-to-r from-pink-500 to-pink-600',
    text: 'text-pink-100',
  },
  indigo: {
    gradient: 'bg-linear-to-r from-indigo-500 to-indigo-600',
    text: 'text-indigo-100',
  },
  teal: {
    gradient: 'bg-linear-to-r from-teal-500 to-teal-600',
    text: 'text-teal-100',
  },
};

export function InvestmentCard({ investment }: InvestmentCardProps) {
  const colorClasses =
    colorClassMap[investment.color.toLowerCase()] || colorClassMap.blue; // Fallback para azul

  return (
    <div
      id={`investment-${investment.id}`}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div
        className={cn(
          colorClasses.gradient,
          'p-4 flex items-start justify-between'
        )}
      >
        <div>
          <h3 className="text-xl font-bold text-white">{investment.name}</h3>
          <p className={cn(colorClasses.text, 'text-sm')}>{investment.type}</p>
        </div>
        <button
          className="text-white hover:text-red-200 transition-colors duration-200"
          aria-label="Excluir investimento"
          title="Excluir investimento"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-800">
            {formatCurrency(investment.amount)}
          </p>
          <p className="text-sm text-gray-500">Valor investido</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">🏦 Origem:</span>
            <span className="text-gray-800 font-semibold text-sm">
              {investment.origin}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">📊 Tipo:</span>
            <span className="text-gray-800 font-semibold text-sm">
              {investment.type}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">🏷️ Categoria:</span>
            <span className="text-gray-800 font-semibold text-sm">
              {investment.category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">📅 Data:</span>
            <span className="text-gray-800 font-semibold text-sm">
              {formatDate(investment.date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
