import React from "react"
import Home from "../Pages/NavPages/Home";
import About from "../Pages/NavPages/About";
import Contact from "../Pages/NavPages/Contact";
import Login from "../Pages/NavPages/Login";
// import Products from "../Pages/NavPages/Products";
import Product from "../Product/Product";
import Men from "../Pages/ProductPages/Men";
import Women from "../Pages/ProductPages/Women";
import BabyAndKids from "../Pages/ProductPages/BabyAndKids";
import Electronics from "../Pages/ProductPages/Electronics";
import Flights from "../Pages/ProductPages/Flights";
import HomeAndFurniture from "../Pages/ProductPages/HomeAndFurniture";
import OfferZone from "../Pages/ProductPages/OfferZone";
import SportsBooksAndMore from "../Pages/ProductPages/SportsBooksAndMore";
import TVsAndAppliances from "../Pages/ProductPages/TVsAndAppliances";
import Cart from "../Pages/NavPages/Cart";
import { Route, Switch } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { AppContext } from "../../AppContext/AppContextProvider"

class PublicRouters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { menCloth, AddToCart, isAuth, isLogin } = this.context;
        return (
            <div>
                <Route path="/" component={Navbar} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={Login} />
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
                <Switch>
                    <Route
                        path="/Products/Men"
                        exact
                        render={(props) => <Men {...props} menCloth={menCloth} isLogin={isLogin} isAuth={isAuth} />}
                    />
                    <Route
                        path="/Products/Men/:id"
                        render={(props) => <Product {...props} productArr={menCloth} isAuth={isAuth} handleClick={AddToCart} />}
                    />

                    <Route
                        path="/Products/Women"
                        render={(props) => <Women  {...props} />}
                    />
                    <Route
                        path="/Products/BabyAndKids"
                        render={(props) => <BabyAndKids  {...props} />}
                    />
                    <Route
                        path="/Products/Electronics"
                        render={(props) => <Electronics  {...props} />}
                    />
                    <Route
                        path="/Products/Flights"
                        render={(props) => <Flights  {...props} />}
                    />
                    <Route
                        path="/Products/HomeAndFurniture"
                        render={(props) => <HomeAndFurniture  {...props} />}
                    />
                    <Route
                        path="/Products/OfferZone"
                        render={(props) => <OfferZone  {...props} />}
                    />
                    <Route
                        path="/Products/SportsBooksAndMore"
                        render={(props) => <SportsBooksAndMore  {...props} />}
                    />
                    <Route
                        path="/Products/TVsAndAppliances"
                        render={(props) => <TVsAndAppliances  {...props} />}
                    />
                </Switch>
            </div>
        )
    }
}

PublicRouters.contextType = AppContext
export default PublicRouters