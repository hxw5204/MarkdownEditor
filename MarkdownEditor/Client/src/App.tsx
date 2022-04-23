import React from 'react';
import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Page } from "./components/Page";

function App() {
  return (
      <div className="_regionComposerRoot">
          <Header />
          <Page />
      </div>
  );
}

export default App;
