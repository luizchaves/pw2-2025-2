import { investments } from './data.js';
import { formatCurrency, formatDate } from './lib/format.js';

function createInvestmentCard(investment) {
  return `<div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div class="bg-gradient-to-r from-${investment.color}-500 to-${investment.color}-600 p-4">
            <h3 class="text-xl font-bold text-white">${investment.name}</h3>
            <p class="text-${investment.color}-100 text-sm">${investment.type}</p>
        </div>
        <div class="p-6">
            <div class="mb-4">
                <p class="text-3xl font-bold text-gray-800">${formatCurrency(investment.amount)}</p>
                <p class="text-sm text-gray-500">Valor investido</p>
            </div>
            <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span class="text-gray-600 text-sm">🏦 Origem:</span>
                    <span class="text-gray-800 font-semibold text-sm">${investment.origin}</span>
                </div>
                <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span class="text-gray-600 text-sm">📊 Tipo:</span>
                    <span class="text-gray-800 font-semibold text-sm">${investment.type}</span>
                </div>
                <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span class="text-gray-600 text-sm">🏷️ Categoria:</span>
                    <span class="text-gray-800 font-semibold text-sm">${investment.category}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600 text-sm">📅 Data:</span>
                    <span class="text-gray-800 font-semibold text-sm">${formatDate(investment.date)}</span>
                </div>
            </div>
        </div>
    </div>`;
}

const investmentCards = document.querySelector('#investment-cards');
const totalAmounts = document.querySelector('#total-amount');
const totalAssets = document.querySelector('#total-assets span');
const totalTypes = document.querySelector('#total-types span');

totalAmounts.textContent = formatCurrency(
  investments.reduce((sum, inv) => sum + inv.amount, 0)
);
totalAssets.textContent = investments.length;
totalTypes.textContent = new Set(investments.map((inv) => inv.type)).size;

investments.forEach((investment) => {
  const card = createInvestmentCard(investment);
  investmentCards.insertAdjacentHTML('beforeend', card);
});
