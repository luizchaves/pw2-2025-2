export interface Investment {
  id: string;
  userId?: string;
  name: string;
  amount: number;
  origin: string;
  type: string;
  category: string;
  classification: string;
  created_at: string;
  color: string;
}

export type InvestmentInput = Omit<Investment, 'id'>;
