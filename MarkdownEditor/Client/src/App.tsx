import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "rich-markdown-editor";

function App() {
  return (
    <div className='App'>
    <Editor className='Editor'
      defaultValue="
      ![A caption](https://upload.wikimedia.org/wikipedia/commons/0/06/Davide-ragusa-gcDwzUGuUoI-unsplash.jpg)"
      disableExtensions={[]}
      onBlur={() => {}}
      onCancel={function noRefCheck() {}}
      onClickHashtag={function noRefCheck() {}}
      onClickLink={function noRefCheck() {}}
      onFocus={function noRefCheck() {}}
    />
    </div>
  );
}

export default App;
