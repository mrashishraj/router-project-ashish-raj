import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContextProvider";
import { Container, NavBtn, Input, Button, Product } from "./StyledComponent"
import styles from "./navbar.module.css"
import { ProductLink } from "./ProductLink"

class Navbar extends React.Component {
  render() {
    const { isAuth, cart, isLogin, handleLogout } = this.context;
    // if (isAuth) {
    return (
      <>
        <Container >
          <NavBtn className={styles.menu}>
            <Link to="/">
              <img style={{ width: "80px" }} src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="" />
            </Link>
            <Link>
              <Input type="text" placeholder="Search for products, brands and more " />
            </Link>
            <Link style={{ padding: "10px" }} to="/Login">
              {isLogin ? <Button>Hi Ashish.</Button> : <Button>Login</Button>}
            </Link>
            <Link style={{ padding: "10px" }} to="/Contact">
              Contact
            </Link>
            <Link style={{ padding: "10px" }} to="/About">
              About
            </Link>
            <Link style={{ padding: "10px" }} to="/Products">
              Products
            </Link>
            <Link to="/cart">
              <i class="fas fa-shopping-cart" style={{ fontSize: "25px" }}> </i>{cart.length}
            </Link>
            {/* <Link onClick={handleLogout}>{isLogin ? <Button>Logout</Button> : ""}</Link> */}

          </NavBtn>
        </Container>
        <Product className={styles.ProductList}>
          {ProductLink.map((link) => <Link to={link.to}>{link.title}<i class="fas fa-caret-down"></i></Link>)}
        </Product>

      </>
    );
    // }
    // return <></>;
  }
}

Navbar.contextType = AppContext;
export default Navbar
