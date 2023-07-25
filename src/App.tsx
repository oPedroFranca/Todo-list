import React, { useContext } from 'react';
import { Modal } from './components/Modal';
import { ModalFormUser } from './components/ModalFormUser';
import { Main } from './pages/todo-page/Main';
import { Sidebar_nav } from './pages/todo-page/Sidebar_nav';
import { Main_content } from './style';
import { GlobalStyle } from './theme/GlobalStyles';
import { WelcomeModal } from './components/WelcomeModal';
import { ModalContext } from './context/ModalContext';
import { TaskContent } from './context/NewTaskContent';
import { ModalTask } from './components/ModalTask';
import { DeleteTaskModal } from './components/DeleteModalTask';

export function App() {
  const { isOpen, isOpenWelcome, isOpenDeleteTask } = useContext(ModalContext);
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

      <Modal isOpen={true}>
        <DeleteTaskModal />
      </Modal>

      <Sidebar_nav />
      <Main_content>
        <Main />
      </Main_content>
    </div>
  );
}
