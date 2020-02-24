import React from 'react';
import FactList from './components/FactList';
import FactForm from './components/FactForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <FactList />
      <FactForm />
    </div>
  );
}

export default App;
