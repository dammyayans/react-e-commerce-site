import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact component={ProductList} path="/" />
        <Route component={Details} path="/details" />
        <Route component={Cart} path="/cart" />
        <Route component={Cart} path="/cart" />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
