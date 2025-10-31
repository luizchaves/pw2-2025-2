import './style.css';
import { investments } from './data';
import { formatCurrency, formatDate } from './lib/format';

const investmentCards = document.querySelector('#investment-cards');
const totalAmounts = document.querySelector('#total-amount');
const totalAssets = document.querySelector('#total-assets span');
const totalTypes = document.querySelector('#total-types span');

window.removeInvestment = removeInvestment;

function createInvestmentCard(investment) {
    return `
    <div
        id="investment-${investment.id}"
        class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
        <div class="bg-gradient-to-r from-${investment.color}-500 to-${investment.color}-600 p-4 flex items-start justify-between">
            <div>
                <h3 class="text-xl font-bold text-white">${investment.name}</h3>
                <p class="text-${investment.color}-100 text-sm">${investment.type}</p>
            </div>
            <button
                class="text-white hover:text-red-200 transition-colors duration-200"
                aria-label="Excluir investimento"
                title="Excluir investimento"
                onclick="removeInvestment('investment-${investment.id}')"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
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



function removeInvestment(cardId) {
    // TODO remove card
    const card = document.getElementById(cardId);
    card.remove();

    // TODO remove from investments array

    const index = investments.findIndex(
        (inv) => `investment-${inv.id}` === cardId
    );

    investments.splice(index, 1);

    // TODO update Stats Overview
    updateStatsOverview();
}

function updateStatsOverview() {
    totalAmounts.textContent = formatCurrency(
        investments.reduce((sum, inv) => sum + inv.amount, 0)
    );
    totalAssets.textContent = investments.length;
    totalTypes.textContent = new Set(investments.map((inv) => inv.type)).size;
}

investments.forEach((investment) => {
    const card = createInvestmentCard(investment);
    investmentCards.insertAdjacentHTML('beforeend', card);
});

updateStatsOverview();
