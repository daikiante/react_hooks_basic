import React from 'react';
import logo from './logo.svg';
import './App.css';

// ファンクショナルコンポーネントをインポートする
// import ファイル名 from パス

import AppContext from './contexts/AppContext';

// import CompB from './components/CompB';

import Memo from './components/Memo'


import { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
}


function App() {
  // ファンクショナルコンポーネントを使う

  const [count, dispatch] = useReducer(reducer, initialState)
  return (

    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

{/*
        Count { count }
        <CompB />
*/}

        <Memo />

        </header>
      </div>

    </AppContext.Provider>
  );
}

export default App;
