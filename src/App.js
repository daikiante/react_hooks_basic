import React from 'react';
import logo from './logo.svg';
import './App.css';

// ファンクショナルコンポーネントをインポートする
// import ファイル名 from パス
import  ApiFetch1 from './components/ApiFetch1'

import AppContext from './contexts/AppContext';
import B from './components/B';

import BasicReducer from './components/BasicReducer'

function App() {
  // ファンクショナルコンポーネントを使う
  return (

    <AppContext.Provider value={'value from App.js'}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <BasicReducer />
        </header>
      </div>

    </AppContext.Provider>
  );
}

export default App;
