import React from "react"
import axios from "axios"

export const AppContext = React.createContext()

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ListItems: "",
            isAuth: false,
            cart: []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:3000/ListItems")
            .then((res) => {
                const data = res.data.results;
                // console.log(res);
                this.setState({
                    ListItems: res.data,
                    isAuth: true
                });
            })
            .catch((error) => console.log(error));
    }

    AddToCart = (url, name, id) => {
        let item = {
            url,
            name,
            id,
        }
        this.setState({
            cart: [...this.state.cart, item]
        })
        console.log(this.state.cart)
    }
    render() {
        const {
            ListItems,
            isAuth,
            cart
        } = this.state

        const {
            AddToCart
        } = this
        const value = {
            ListItems,
            isAuth,
            AddToCart,
            cart
        }

        return ( <
            AppContext.Provider value = {
                value
            } > {
                this.props.children
            } <
            /AppContext.Provider>
        )
    }
}

export default AppContextProvider