import React from 'react';
import { Header } from './pages/todo-page/Header';
import { Main } from './pages/todo-page/Main';
import { Sidebar_nav } from './pages/todo-page/Sidebar_nav';
import { Main_content, GlobalStyle } from './style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Header></Header>
      <Main_content>
        <Sidebar_nav></Sidebar_nav>
        <Main></Main>
      </Main_content>
    </div>
  );
}

export default App;
