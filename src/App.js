import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ShopView from './views/ShopView';
import ProductDetailView from './views/ProductDetailView';
import CartView from './views/CartView';
import AccountView from './views/AccountView';
import CreateAccountView from './views/CreateAccountView';

import products from './data/products.json';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (
    product,
    selectedColor,
    selectedOption,
    quantity
  ) => {

    const existingItem = cartItems.find(
      (item) =>
        item.productId === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedOption === selectedOption
    );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.cartItemId === existingItem.cartItemId
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        )
      );

    } else {

      const newCartItem = {
        cartItemId: Date.now(),
        productId: product.id,
        name: product.name,
        image: product.image,
        selectedColor: selectedColor,
        selectedOption: selectedOption,
        quantity: quantity,
        unitPrice: product.price,
        quantityInStock: product.quantityInStock
      };

      setCartItems([
        ...cartItems,
        newCartItem
      ]);
    }
  };

  const increaseQuantity = (cartItemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.cartItemId === cartItemId &&
        item.quantity < item.quantityInStock
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  const decreaseQuantity = (cartItemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.cartItemId === cartItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (cartItemId) => {
    setCartItems(
      cartItems.filter(
        (item) => item.cartItemId !== cartItemId
      )
    );
  };
  
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="App">

      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartCount}
      />

      {currentView === 'home' && (
        <HomeView setCurrentView={setCurrentView} />
      )}

      {currentView === 'shop' && (
        <ShopView
          products={products}
          setSelectedProduct={setSelectedProduct}
          setCurrentView={setCurrentView}
        />
      )}

      {currentView === 'product' && (
        <ProductDetailView
          product={selectedProduct}
          setCurrentView={setCurrentView}
          addToCart={addToCart}
        />
      )}

      {currentView === 'cart' && (
        <CartView
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          setCurrentView={setCurrentView}
        />
      )}

      {currentView === 'account' && (
        <AccountView
          setCurrentView={setCurrentView}
        />
      )}

      {currentView === 'createAccount' && (
        <CreateAccountView
          setCurrentView={setCurrentView}
        />
      )}

    </div>
  );
}

export default App;