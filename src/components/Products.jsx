import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 0, name: "test1", price: "$9.99", description: "Test Item 1" },
  { id: 1, name: "test2", price: "$8.99", description: "Test Item 2" },
  { id: 2, name: "test3", price: "$7.99", description: "Test Item 3" },
];

const Products = () => {
  return (
    <main>
      <div />
      <Grid container justify='center' spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
