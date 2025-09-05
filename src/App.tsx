import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Form from "./components/Form";
import List from "./components/List";
import type { Transaction } from './types';
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('expense-tracker-transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('expense-tracker-transactions', JSON.stringify(transactions));
    }
  }, [transactions, isLoaded]);

  const addTransaction = (
    description: string,
    amount: number,
    type: "income" | "expense"
  ) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      description,
      amount,
      type,
    };

    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };
  
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Summary transactions={transactions} />
        <Form onAddTransaction={addTransaction} />
        <List 
          transactions={transactions} 
          onDeleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;