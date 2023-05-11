import React, { useContext } from 'react';
import { Modal } from './components/Modal';
import { ModalFormUser } from './components/ModalFormUser';
import { Header } from './pages/todo-page/Header';
import { Main } from './pages/todo-page/Main';
import { Sidebar_nav } from './pages/todo-page/Sidebar_nav';
import { Main_content } from './style';
import { GlobalStyle } from './theme/GlobalStyles';
import { WelcomeModal } from './components/WelcomeModal';
import { ModalContext } from './context/ModalContext';

export function App() {
  const { isOpen } = useContext(ModalContext);
  const { isOpenWelcome } = useContext(ModalContext);

  return (
    <div className="App">
      <GlobalStyle />

      

      <Modal isOpen={false}>
        <WelcomeModal />
      </Modal>

      <Header />
      <Main_content>
        <Sidebar_nav />

        <Main />
      </Main_content>
    </div>
  );
}
