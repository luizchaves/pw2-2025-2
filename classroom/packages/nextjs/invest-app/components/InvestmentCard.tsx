'use client';

import { cn } from '@/utils/cn';
import { formatCurrency, formatDate } from '@/utils/format';

interface Investment {
  id: string;
  name: string;
  amount: number;
  origin: string;
  type: string;
  category: string;
  classification: string;
  date: string;
  color: string;
}

interface InvestmentCardProps {
  investment: Investment;
  isEyeOpen: boolean;
}

const colorMap: Record<string, string> = {
  slate: 'from-slate-500 to-slate-600',
  gray: 'from-gray-500 to-gray-600',
  zinc: 'from-zinc-500 to-zinc-600',
  neutral: 'from-neutral-500 to-neutral-600',
  stone: 'from-stone-500 to-stone-600',
  red: 'from-red-500 to-red-600',
  orange: 'from-orange-500 to-orange-600',
  amber: 'from-amber-500 to-amber-600',
  yellow: 'from-yellow-500 to-yellow-600',
  lime: 'from-lime-500 to-lime-600',
  green: 'from-green-500 to-green-600',
  emerald: 'from-emerald-500 to-emerald-600',
  teal: 'from-teal-500 to-teal-600',
  cyan: 'from-cyan-500 to-cyan-600',
  sky: 'from-sky-500 to-sky-600',
  blue: 'from-blue-500 to-blue-600',
  indigo: 'from-indigo-500 to-indigo-600',
  violet: 'from-violet-500 to-violet-600',
  purple: 'from-purple-500 to-purple-600',
  fuchsia: 'from-fuchsia-500 to-fuchsia-600',
  pink: 'from-pink-500 to-pink-600',
  rose: 'from-rose-500 to-rose-600',
};

export function InvestmentCard({ investment, isEyeOpen }: InvestmentCardProps) {
  const handleDeleteInvestment = () => {
    alert('Funcionalidade de exclusão ainda não implementada');
  };

  const gradientClass =
    colorMap[investment.color] || 'from-gray-500 to-gray-600';

  return (
    <div
      id={`investment-${investment.id}`}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div
        className={cn(
          `bg-gradient-to-r ${gradientClass}`,
          'p-4 flex items-start justify-between'
        )}
      >
        <div>
          <h3 className="text-xl font-bold text-white">{investment.name}</h3>
          <p className="text-white text-sm">{investment.classification}</p>
        </div>
        <button
          className="text-white hover:text-red-200 transition-colors duration-200"
          aria-label="Excluir investimento"
          title="Excluir investimento"
          onClick={handleDeleteInvestment}
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
            {isEyeOpen ? formatCurrency(investment.amount) : 'R$  ****'}
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
