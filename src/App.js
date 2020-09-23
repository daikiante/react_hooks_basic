import React from 'react';
import logo from './logo.svg';
import './App.css';

// ファンクショナルコンポーネントをインポートする
// import ファイル名 from パス
import  Basic1 from './components/Basic1'

function App() {

  // ファンクショナルコンポーネントを使う
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Basic1 name='Hooks'/>

        <Basic1 name='Today'/>

      </header>
    </div>
  );
}

export default App;
