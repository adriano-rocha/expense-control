import Header from "./components/Header";
import Summary from "./components/Summary";
import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header />
        {/* Cards de Resumo */}
        <Summary />

        {/* Área do Formulário */}
        {/* Formulário de Transação */}
        <Form />

        {/* Lista de Transações */}
        <List />
      </div>
    </div>
  );
}

export default App;
