import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Orders from './components/Orders';
import SignIn from './components/SignIn';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const handleShowComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="App">
      <header>
        <h1>Seafood Supplier System</h1>
      </header>
      <nav>
        
          <button onClick={() => handleShowComponent('Home')}>Login</button>
          <button onClick={() => handleShowComponent('SignIn')}>Sign In</button>
        
      </nav>
      {activeComponent === 'Home' && <Home />}
      {activeComponent === 'Products' && <ProductList />}
      {activeComponent === 'AboutUs' && <AboutUs />}
      {activeComponent === 'Orders' && <Orders />}
      {activeComponent === 'SignIn' && <SignIn />}
    </div>
  );
}


export default App;
