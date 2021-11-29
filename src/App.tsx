import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handeOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handeCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <>
        <Header onOpenNewTransactionModal={handeOpenNewTransactionModalOpen} />
        <Dashboard />
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handeCloseNewTransactionModalOpen} />
        <GlobalStyle />
      </>
    </div>
  );
}

