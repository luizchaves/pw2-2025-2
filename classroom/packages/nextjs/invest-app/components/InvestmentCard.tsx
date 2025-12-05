'use client';

import { cn } from '@/utils/cn';
import { formatCurrency, formatDate } from '@/utils/format';
import { Investment } from '@/types';
import { getGradientClass } from '@/utils/colors';

interface InvestmentCardProps {
  investment: Investment;
  isEyeOpen: boolean;
}

export function InvestmentCard({ investment, isEyeOpen }: InvestmentCardProps) {
  const handleDeleteInvestment = () => {
    alert('Funcionalidade de exclusão ainda não implementada');
  };

  const gradientClass = getGradientClass(investment.color);

  return (
    <div
      id={`investment-${investment.id}`}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div
        className={cn(
          `bg-linear-to-r ${gradientClass}`,
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
              {formatDate(investment.created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
