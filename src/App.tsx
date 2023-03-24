import React from 'react';
import './App.css';
import { Header } from './pages/todo-page/Header';
import { Main } from './pages/todo-page/Main';
import { Sidebar_left } from './pages/todo-page/Sidebar_left';

function App() {
  return (
    <div className="App">
      <div className="Header"></div>
      <div className="Sidebar_left"></div>
      <div className="Main"></div>
      <Header></Header>
      <Sidebar_left></Sidebar_left>
      <Main></Main>
    </div>
  );
}

export default App;
