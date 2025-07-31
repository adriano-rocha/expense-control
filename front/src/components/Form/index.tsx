import { useState } from "react";

interface FormProps {
  onAddTransaction: (
    description: string,
    amount: number,
    type: "income" | "expense"
  ) => void;
}

const Form = ({ onAddTransaction }: FormProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description.trim()) {
      alert("Por favor, digite uma descrição!");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Por favor, digite um valor maior que zero!");
      return;
    }

    if (!type) {
      alert("Por favor, selecione o tipo da transação!");
      return;
    }

    onAddTransaction(
      description.trim(),
      parseFloat(amount),
      type as "income" | "expense"
    );

    setDescription("");
    setAmount("");
    setType("");
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">
        Adicionar Transação
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Descrição
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            placeholder="Ex: Aluguel, Salário, Conta de luz..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Valor
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            placeholder="0,00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Tipo
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          >
            <option value="">Selecione o tipo</option>
            <option value="income">Receita</option>
            <option value="expense">Despesa</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Adicionar Transação
        </button>
      </form>
    </div>
  );
};

export default Form;