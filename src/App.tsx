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

  return (
    <div className="App">
      <GlobalStyle />

      <Modal isOpen={isOpen}>
        <ModalFormUser />
      </Modal>

      <Modal isOpen={false}>
        <WelcomeModal />
      </Modal>

      <Header></Header>
      <Main_content>
        <Sidebar_nav></Sidebar_nav>
        <Main></Main>
      </Main_content>
    </div>
  );
}
