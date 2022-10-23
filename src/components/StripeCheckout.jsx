import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/StripeCheckout";

const CheckoutForm = () => {
  return <h4>hello from Stripe Checkout </h4>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

export default StripeCheckout;
