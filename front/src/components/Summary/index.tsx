import type { Transaction } from '../../types';

interface SummaryProps {
  transactions: Transaction[];
}

const Summary = ({ transactions }: SummaryProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  const getBalanceColor = () => {
    if (balance > 0) return 'text-green-600';
    if (balance < 0) return 'text-red-600';
    return 'text-blue-600';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-2">
          Total de Despesas
        </h3>
        <p className="text-2xl font-bold text-red-600">
          {formatCurrency(totalExpense)}
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-2">Receitas</h3>
        <p className="text-2xl font-bold text-green-600">
          {formatCurrency(totalIncome)}
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-2">Saldo</h3>
        <p className={`text-2xl font-bold ${getBalanceColor()}`}>
          {formatCurrency(balance)}
        </p>
      </div>
    </div>
  );
};

export default Summary;