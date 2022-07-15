import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handeCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handeOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handeCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
