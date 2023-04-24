import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { Modal } from './components/Modal';
import { ModalFormUser } from './components/ModalFormUser';
import { Header } from './pages/todo-page/Header';
import { Main } from './pages/todo-page/Main';
import { Sidebar_nav } from './pages/todo-page/Sidebar_nav';
import { Main_content } from './style';
import { GlobalStyle } from './theme/GlobalStyles';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Modal isOpen={true}>
        <ModalFormUser />
      </Modal>

      <Header></Header>
      <Main_content>
        <Sidebar_nav></Sidebar_nav>
        <Main></Main>
      </Main_content>
    </div>
  );
}
