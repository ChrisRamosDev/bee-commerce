import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));

const Cart = ({ cart }) => {
  const classes = useStyles();

  const RenderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  const EmptyCart = () => (
    <Typography variant='subtitle1'>Nothing in your cart yet!</Typography>
  );

  if (!cart.line_items) return "Loading..";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant='h3' gutterBottom className={classes.title}>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <RenderCart />}
    </Container>
  );
};

export default Cart;
