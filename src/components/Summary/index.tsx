//import React from 'react'

const Summary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Total de Despesas
        </h3>
        <p className="text-2xl font-bold text-red-600">R$ 0,00</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Receitas</h3>
        <p className="text-2xl font-bold text-green-600">R$ 0,00</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Saldo</h3>
        <p className="text-2xl font-bold text-blue-600">R$ 0,00</p>
      </div>
    </div>
  );
};

export default Summary;
