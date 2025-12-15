'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/useToast';
import { useInvestments } from '@/contexts/InvestmentContext';
import { InvestmentCard } from '@/components/InvestmentCard';
import { InvestmentCardSkeleton } from '@/components/InvestmentCardSkeleton';
import { InvestmentDrawer } from '@/components/InvestmentDrawer';
import { ToastContainer } from '@/components/ToastContainer';
import { IconEye, IconEyeOff } from '@/components/Icons';
import { formatCurrency } from '@/utils/format';
import { InvestmentInput } from '@/types';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function InvestmentsContent() {
  const { showToast } = useToast();
  const {
    investments,
    isLoading,
    isCreatingInvestment,
    loadInvestments,
    addInvestment,
    removeInvestment,
  } = useInvestments();

  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    loadInvestments();
  }, []);

  const handleAddInvestment = async (investmentData: InvestmentInput) => {
    try {
      await addInvestment(investmentData);
      showToast(`${investmentData.name} adicionado com sucesso!`, 'success');
    } catch (error) {
      showToast('Erro ao adicionar investimento. Tente novamente.', 'error');
    }
  };

  const handleRemoveInvestment = async (investmentId: string) => {
    try {
      const removedInvestment = investments.find(
        (inv) => inv.id === investmentId
      );
      await removeInvestment(investmentId);
      showToast(`${removedInvestment?.name} removido com sucesso!`, 'success');
    } catch (error) {
      showToast('Erro ao remover investimento. Tente novamente.', 'error');
    }
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
              <>
                <InvestmentCardSkeleton />
                <InvestmentCardSkeleton />
                <InvestmentCardSkeleton />
              </>
            ) : investments.length > 0 || isCreatingInvestment ? (
              <>
                {investments.map((investment) => (
                  <InvestmentCard
                    key={investment.id}
                    investment={investment}
                    isEyeOpen={isEyeOpen}
                    onRemove={handleRemoveInvestment}
                  />
                ))}
                {isCreatingInvestment && <InvestmentCardSkeleton />}
              </>
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
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-24 right-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2 z-50"
        aria-label="Add new investment"
      >
        <span className="text-2xl">+</span>
      </button>

      {/* Investment Drawer */}
      <InvestmentDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={handleAddInvestment}
      />

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default function InvestmentsPage() {
  return (
    <ProtectedRoute>
      <InvestmentsContent />
    </ProtectedRoute>
  );
}
