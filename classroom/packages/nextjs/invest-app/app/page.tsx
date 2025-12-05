'use client';

import { useEffect, useState } from 'react';
import { InvestmentCard } from '@/components/InvestmentCard';
import { formatCurrency } from '@/utils/format';
import {
  Investment,
  investments as initialInvestments,
} from '@/data/investments';

const IconEye = () => (
  <svg
    className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const IconEyeOff = () => (
  <svg
    className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

export default function Home() {
  const [isEyeOpen, setIsEyeOpen] = useState(true);

  // setInvestments([...investments, newInvestment])
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    setInvestments(initialInvestments);
  }, []);

  const newInvestmentTemplate: Investment = {
    id: `investment-${Date.now()}`,
    name: 'Novo Investimento',
    amount: 100,
    origin: 'Não especificado',
    type: 'A definir',
    category: 'Moderado',
    classification: 'Renda Fixa',
    date: new Date().toISOString().split('T')[0],
    color: 'gray',
  };

  const handleAddInvestment = () => {
    setInvestments([...investments, newInvestmentTemplate]);
  };

  const totalAmounts = formatCurrency(
    investments.reduce((sum, inv) => sum + inv.amount, 0)
  );

  const totalAssets = investments.length;

  const totalTypes = new Set(investments.map((inv) => inv.type)).size;

  const handleToggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Header */}
        <header>
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-3xl font-bold text-gray-800">
                  <span className="text-blue-600">💰</span> Meus Investimentos
                </h1>
                <p className="text-gray-600 mt-2">
                  Acompanhe sua carteira de investimentos
                </p>
              </div>
              <button
                onClick={() => handleToggleEye()}
                className="hover:scale-110 transition-transform cursor-pointer ml-4 p-2"
                aria-label="Toggle visibility"
              >
                {isEyeOpen ? <IconEye /> : <IconEyeOff />}
              </button>
            </div>
          </div>
        </header>{' '}
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
              >
                {isEyeOpen ? totalAmounts : 'R$ ****'}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 text-sm font-semibold uppercase">
                Quantidade
              </p>
              <p
                id="total-assets"
                className="text-3xl font-bold text-gray-800 mt-2"
              >
                <span>{totalAssets}</span> ativos
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 text-sm font-semibold uppercase">
                Tipos
              </p>
              <p id="total-types" className="text-3xl font-bold mt-2">
                <span>{totalTypes}</span> tipos
              </p>
            </div>
          </div>

          {/* Investment Cards */}
          <div
            id="investment-cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {investments.length > 0 ? (
              investments.map((investment) => (
                <InvestmentCard
                  key={investment.id}
                  investment={investment}
                  isEyeOpen={isEyeOpen}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  Nenhum investimento registrado. Comece a adicionar seus
                  investimentos!
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={handleAddInvestment}
        className="fixed bottom-24 right-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2 z-50"
        aria-label="Add new investment"
      >
        <span className="text-2xl">+</span>
      </button>
    </>
  );
}
