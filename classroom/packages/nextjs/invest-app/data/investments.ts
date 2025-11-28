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

export const investments: Investment[] = [
  {
    id: 'a3f5e8c7-2d4b-4a9e-8f1c-5b3d7e9a2c1f',
    name: 'Tesouro Selic 2027',
    amount: 2500000,
    origin: 'Tesouro Direto',
    type: 'Título Público',
    category: 'Conservador',
    classification: 'Renda Fixa',
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
    classification: 'Renda Fixa',
    date: '2024-03-15',
    color: 'blue',
  },
];
