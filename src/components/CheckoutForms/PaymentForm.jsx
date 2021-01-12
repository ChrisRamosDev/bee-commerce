import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "./Review";

const PaymentForm = ({ shippingData, checkoutToken }) => {
  console.log(shippingData);

  return (
    <div>
      <>
        <Review checkoutToken={checkoutToken} />
      </>
    </div>
  );
};

export default PaymentForm;
