
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import data  from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
      if(exist){
        setCartItems(
          cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
        );
      } else{
        setCartItems([...cartItems, {...product, qty: 1 }]);
      }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
      if(exist.qty === 1){
        setCartItems(
          cartItems.filter((x) => x.id !== product.id)
        )
      }
      else{
        setCartItems(
          cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
        )
      }
  }


  return (
    <div className="App">
        <Header countCartItems={cartItems.length}/>
      <div className="flex_1">
        <Main products={products} onAdd={onAdd} />
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        
      </div>
    </div>
  );
}

export default App;
