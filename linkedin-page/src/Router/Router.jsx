import React from "react"
import { Route,Switch } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"
import Login from "../Component/LoginPage/Login"

export default class Router extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }


    render(){
        return(
            <>
            <Route path="/" exact  render={()=><Login/>}/>            
            <Route path="/dashboard"   render={()=><Navbar/>}/> 
            </>
        )
    }
}