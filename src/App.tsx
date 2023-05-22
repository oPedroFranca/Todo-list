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
import { TaskContent } from './context/NewTaskContent';
import { ModalTask } from './components/ModalTask';

export function App() {
  const { isOpen } = useContext(ModalContext);
  const { isOpenWelcome } = useContext(ModalContext);
  const { isOpenTask } = useContext(TaskContent);

  return (
    <div className="App">
      <GlobalStyle />

      <Modal isOpen={false}>
        <ModalFormUser />
      </Modal>

      <Modal isOpen={false}>
        <WelcomeModal />
      </Modal>

      <Modal isOpen={isOpenTask}>
        <ModalTask />
      </Modal>

      <Header />
      <Main_content>
        <Sidebar_nav />

        <Main />
      </Main_content>
    </div>
  );
}
