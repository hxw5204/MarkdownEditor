import React from 'react';
import './App.css';
import { MarkdownEditor } from './Components/Editor/Editor';
import { Header } from './Components/Header/Header';

function App() {
  return (
      <div className='App'>
          <Header />
          <MarkdownEditor />
    </div>
  );
}

export default App;
