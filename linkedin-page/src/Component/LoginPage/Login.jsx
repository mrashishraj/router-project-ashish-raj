import React from "react"
import { connect } from "react-redux"
import {Link, Redirect} from "react-router-dom"
import {postLoginData} from "../../Redux/action"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {username,password} = this.state
        const {login,isLoading,isAuth,user} = this.props
        console.log(user,isLoading,isAuth)

        if(isAuth){
            return(
                <Redirect to="/dashboard" />
            )
        }

        return(
            <>
            <div style={{display:"flex"}}>
                <div className="text-primary" style={{display:"flex",marginLeft:"200px"}}>
                    <h2 className="mt-2">Linked</h2> <h1><i className="fab fa-linkedin"></i></h1>
                </div>
                <div style={{marginLeft:"600px",display:"flex"}} className="p-2 text-primary">
                    <p className="border-right pr-2 mt-3" > Join now </p>
                    <p className="pl-2 mt-3">Join with Resume</p>
                    <button type="button" className="btn btn-outline-primary ml-2 px-4" style={{height:"10"}}>Sign in</button>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",marginTop:"20px"}}>
                <div style={{marginLeft:"200px",width:"600px"}}>
                    <div>
                        <h1 className="text-primary align-left mb-5">Welcome to your <br/> professional community</h1>
                        <input type="text" name="username" value={username} onChange={this.handleChange} className="p-2" placeholder="Email or phone number" style={{width:"400px",fontSize:"17px"}}/><br/><br/>
                        <input type="password" name="password" value={password} onChange={this.handleChange} className="p-2" placeholder="Password" style={{width:"400px",fontSize:"17px"}}/> <br/>
                        <div>Forget password</div><br/><br/>
                        <button type="button" onClick={()=>login({username,password})}  className="btn btn-primary btn-lg rounded-pill mb-2" style={{width:"400px"}}>Sign in</button> 
                        <div style={{width:"400px",textAlign:"center",fontSize:"25px"}}>or</div> 
                            <button type="button" className="btn border border-danger btn-light btn-lg rounded-pill mt-2" style={{width:"400px"}}>Sign in with Google</button> 
                    </div>                    
                </div>
                <div style={{flex:"1"}}>
                <img src={process.env.PUBLIC_URL + "/login_logo.png"} alt="Login Image" style={{width:"700px"}}/>
                </div>
            </div>
            
            </>
        )
    }
}

const mapStateToProps = state => ({
    user:state.user,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
})
// console.log(mapStateToProps)

const mapDispatchToProps = dispatch =>({login:(payload)=>dispatch(postLoginData(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(Login)