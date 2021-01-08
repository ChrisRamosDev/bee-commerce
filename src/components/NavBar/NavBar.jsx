import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/bee.svg";

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <AppBar postion='fixed' color='inherit' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h5' color='inherit' className={classes.title}>
          <img src={logo} alt='logo' height='30px' className={classes.image} />
          &nbsp;Commerce
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label='Show Cart' color='inherit'>
            <Badge badgeContent={totalItems} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
