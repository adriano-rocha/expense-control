import type { Transaction } from "../../types";

interface ListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

const List = ({ transactions, onDeleteTransaction }: ListProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleDelete = (transaction: Transaction) => {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja deletar a transação "${transaction.description}" no valor de ${formatCurrency(transaction.amount)}?`
    );
    
    if (confirmDelete) {
      onDeleteTransaction(transaction.id);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Transações</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">Nenhuma transação ainda</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center p-3 bg-gray-700 border border-gray-600 rounded-md"
            >
              <div>
                <span className="font-medium text-gray-100">
                  {transaction.description}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`font-bold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formatCurrency(transaction.amount)}
                </div>
                <button
                  onClick={() => handleDelete(transaction)}
                  className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm transition duration-200"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;