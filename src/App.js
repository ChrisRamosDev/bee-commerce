import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // commerce.js methods for cart functionality
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleRemoveFromCart = async () => {
    setCart(commerce.cart.remove());
  };
  // const handleUpdateCart = async () => {
  //   setCart(commerce.cart.update());
  // };
  // const handleEmptyCart = async () => {
  //   setCart(commerce.cart.empty());
  // };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
