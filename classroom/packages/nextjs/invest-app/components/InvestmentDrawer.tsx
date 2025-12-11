'use client';

import { useEffect, useState } from 'react';
import { InvestmentInput } from '@/types';

interface InvestmentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (investment: InvestmentInput) => Promise<void>;
}

const INITIAL_FORM_STATE: InvestmentInput = {
  name: '',
  amount: 0,
  origin: '',
  type: '',
  category: '',
  classification: '',
  created_at: new Date().toISOString().split('T')[0],
  color: 'blue',
};

export function InvestmentDrawer({
  isOpen,
  onClose,
  onSubmit,
}: InvestmentDrawerProps) {
  const [formData, setFormData] = useState<InvestmentInput>(INITIAL_FORM_STATE);
  const [displayAmount, setDisplayAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'amount') {
      setDisplayAmount(value);

      const normalizedValue = value.replace(',', '.');

      setFormData((prev) => ({
        ...prev,
        amount: normalizedValue === '' ? 0 : Number(normalizedValue),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit({
        ...formData,
        amount: Math.round(formData.amount * 100),
      });

      setFormData(INITIAL_FORM_STATE);
      setDisplayAmount('');
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-all duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Novo Investimento
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Fechar"
            >
              ×
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome do Investimento *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Tesouro IPCA 2050"
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Valor *
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={displayAmount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0,00"
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tipo *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione...</option>
                <option value="Tesouro Direto">Tesouro Direto</option>
                <option value="CDB">CDB</option>
                <option value="LCI/LCA">LCI/LCA</option>
                <option value="Ações">Ações</option>
                <option value="FII">FII</option>
                <option value="Cripto">Cripto</option>
                <option value="Poupança">Poupança</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="classification"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Classificação *
              </label>
              <select
                id="classification"
                name="classification"
                value={formData.classification}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione...</option>
                <option value="Renda Fixa">Renda Fixa</option>
                <option value="Renda Variável">Renda Variável</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categoria *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione...</option>
                <option value="Conservador">Conservador</option>
                <option value="Moderado">Moderado</option>
                <option value="Arrojado">Arrojado</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="origin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Origem
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Banco XYZ"
              />
            </div>

            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cor
              </label>
              <select
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
                <option value="red">Vermelho</option>
                <option value="yellow">Amarelo</option>
                <option value="purple">Roxo</option>
                <option value="pink">Rosa</option>
                <option value="orange">Laranja</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="created_at"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Data
              </label>
              <input
                type="date"
                id="created_at"
                name="created_at"
                value={formData.created_at}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Salvando...</span>
                  </>
                ) : (
                  'Salvar'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
