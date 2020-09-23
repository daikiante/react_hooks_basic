import React from 'react';
import logo from './logo.svg';
import './App.css';

// ファンクショナルコンポーネントをインポートする
// import ファイル名 from パス
import  TimerContainer from './components/TimerContainer'

function App() {

  // ファンクショナルコンポーネントを使う
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TimerContainer />

      </header>
    </div>
  );
}

export default App;
