import React from 'react';
import './App.css';
import MarkdownEditor from './Components/Editor/Editor';
import { Header } from './Components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './Store';


function App()
{
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <MarkdownEditor />
            </div>
        </Provider>
    );
}

export default App;
