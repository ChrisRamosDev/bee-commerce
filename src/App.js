import React, { useState, useEffect } from "react";
import Products from "./components/Products";

import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Debugging</h1>
      <Products products={products} />
    </>
  );
};

export default App;
