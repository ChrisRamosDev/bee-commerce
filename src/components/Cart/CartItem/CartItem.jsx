import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));

const CartItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='h6'>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small'>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small'>
            +
          </Button>
        </div>
        <Button variant='contained' type='button' color='secondary'>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
