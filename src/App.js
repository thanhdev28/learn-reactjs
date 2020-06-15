import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
function App() {
  var products = [
    {
      id: 1,
      name: 'iphone',
      price: 100000
    },
    {
      id: 2,
      name: 'samsung',
      price: 200000
    },
    {
      id: 3,
      name: 'oppo',
      price: 320000
    }
  ];
  return (
    <div className="App">
      <Header></Header>
      <Product products={ products }></Product>
    </div>
  );
}

export default App;
