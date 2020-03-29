import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

import { ProductConsumer } from "../context";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          return cart.length > 0 ? (
            <>
              <Title name="my" title="cart" />
              <CartColumns />
              <CartList value={value} />
              <CartTotals value={value} />
            </>
          ) : (
            <EmptyCart />
          );
        }}
      </ProductConsumer>
    );
  }
}
