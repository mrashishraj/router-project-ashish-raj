import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Login from "../Routes/Login";
import Products from "../Routes/Products";
import Product from "../Routes/Product";
import Cart from "../Routes/Cart";
import { AppContext } from "../AppContext/AppContextProvider";

export default class Navbar extends React.Component {
  render() {
    const { ListItems, isAuth, AddToCart, cart } = this.context;
    // console.log(ListItems);
    if (isAuth) {
      return (
        <>
          <div></div>
          <div>
            <Link style={{ padding: "10px" }} to="/">
              Home
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
            <Link style={{ padding: "10px" }} to="/Login">
              Login
            </Link>
            <Link to="/cart">
              <img
                src="https://icon2.cleanpng.com/20171220/skq/shopping-cart-png-5a3a8fc8964401.8796450215137873366155.jpg"
                alt=""
                style={{ width: "25px" }}
              />
              {cart.length}
            </Link>
            <p></p>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
            <Route
              path="/Products"
              exact
              render={(props) => <Products productArr={ListItems} {...props} />}
            />
            <Route
              path="/Products/:id"
              render={(props) => (
                <Product
                  productArr={ListItems}
                  handleClick={AddToCart}
                  {...props}
                />
              )}
            />
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </>
      );
    }
    return <></>;
  }
}

Navbar.contextType = AppContext;
