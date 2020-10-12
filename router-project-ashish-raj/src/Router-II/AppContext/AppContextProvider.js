import React from "react"
import axios from "axios"

export const AppContext = React.createContext()

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ListItems: "",
            isAuth: false,
            isLogin: false,
            cart: [],
            menCloth: [],
        }
    }

    componentDidMount = () => {
        axios
            .get("http://localhost:3000/Men")
            .then((res) => {
                this.setState({
                    menCloth: res.data,
                    isAuth: true
                });
                console.log(res)
            })
            .catch((error) => console.log(error));

    }

    handleLogin = (id, pass) => {
        console.log(id, pass)
        if (id === "ashish" && pass === "pass")
            this.setState({
                isLogin: true
            })
        console.log(this.state.isLogin)
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

    handleLogout = () => {
        this.setState({
            isLogin: false
        })
        alert("You are Loged Out")
    }

    render() {
        const {
            menCloth,
            isAuth,
            cart,
            isLogin
        } = this.state

        const {
            AddToCart,
            handleLogin,
            handleLogout
        } = this

        const value = {
            menCloth,
            isAuth,
            AddToCart,
            cart,
            handleLogin,
            isLogin,
            handleLogout
        }

        return ( < AppContext.Provider value = {
                value
            } > {
                this.props.children
            } <
            /AppContext.Provider>
        )
    }
}

export default AppContextProvider