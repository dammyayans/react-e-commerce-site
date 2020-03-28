import React, { Component } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-items ml-5">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <MdShoppingCart className="mr-2" />
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
