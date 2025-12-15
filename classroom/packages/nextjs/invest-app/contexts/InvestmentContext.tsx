'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Investment, InvestmentInput } from '@/types';
import Storage from '@/storage/storage-supabase-client';

interface InvestmentContextType {
  investments: Investment[];
  isLoading: boolean;
  isCreatingInvestment: boolean;
  loadInvestments: () => Promise<void>;
  addInvestment: (data: InvestmentInput) => Promise<void>;
  removeInvestment: (id: string) => Promise<void>;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(
  undefined
);

export function InvestmentProvider({ children }: { children: ReactNode }) {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreatingInvestment, setIsCreatingInvestment] = useState(false);

  const loadInvestments = async () => {
    try {
      const data = await Storage.read<Investment>('investments');
      setInvestments(data as Investment[]);
    } finally {
      setIsLoading(false);
    }
  };

  const addInvestment = async (investmentData: InvestmentInput) => {
    setIsCreatingInvestment(true);

    try {
      const createdInvestment = await Storage.create<InvestmentInput>(
        'investments',
        investmentData
      );

      setInvestments([...investments, createdInvestment as Investment]);
    } finally {
      setIsCreatingInvestment(false);
    }
  };

  const removeInvestment = async (investmentId: string) => {
    try {
      await Storage.remove('investments', investmentId);
      setInvestments(investments.filter((inv) => inv.id !== investmentId));
    } catch (error) {
      throw error;
    }
  };

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        isLoading,
        isCreatingInvestment,
        loadInvestments,
        addInvestment,
        removeInvestment,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestments() {
  const context = useContext(InvestmentContext);

  if (!context) {
    throw new Error(
      'useInvestments deve ser usado dentro de InvestmentProvider'
    );
  }

  return context;
}
