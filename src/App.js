import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from "./component/hello-world/hello-world.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	  </header>
	  <p><HelloWorld /></p>
    </div>
  );
}

export default App;
