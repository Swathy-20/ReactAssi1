import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;