'use client';

import { useEffect, useState } from 'react';
import { InvestmentCard } from '@/components/InvestmentCard';
import { IconEye, IconEyeOff } from '@/components/Icons';
import { formatCurrency } from '@/utils/format';
import { Investment, InvestmentInput } from '@/types';
import Storage from '@/storage/storage-supabase-client';

export default function Home() {
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // setInvestments([...investments, newInvestment])
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    const loadInvestments = async () => {
      try {
        const data = await Storage.read<Investment>('investments');
        setInvestments(data as Investment[]);
      } finally {
        setIsLoading(false);
      }
    };

    loadInvestments();
  }, []);

  const handleAddInvestment = async () => {
    const newInvestmentTemplate: InvestmentInput = {
      name: 'Tesouro IPCA 2050',
      amount: 10000,
      origin: 'Não especificado',
      type: 'Tesouro Direto',
      category: 'Conservador',
      classification: 'Renda Fixa',
      created_at: new Date().toISOString().split('T')[0],
      color: 'blue',
    };

    const createdInvestment = await Storage.create<InvestmentInput>(
      'investments',
      newInvestmentTemplate
    );

    setInvestments([...investments, createdInvestment as Investment]);
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
            {isLoading ? (
              <div className="col-span-full flex items-center justify-center py-24">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600 text-lg">
                    Carregando investimentos...
                  </p>
                </div>
              </div>
            ) : investments.length > 0 ? (
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
