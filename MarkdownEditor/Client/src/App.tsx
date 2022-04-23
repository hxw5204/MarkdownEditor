import React from 'react';
import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
      <div className="_regionComposerRoot">
          <Header />
    </div>
  );
}

export default App;
