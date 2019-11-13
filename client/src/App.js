import React from 'react';
import Register from './Components/register';
import Login from './Components/login';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login Here</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;
