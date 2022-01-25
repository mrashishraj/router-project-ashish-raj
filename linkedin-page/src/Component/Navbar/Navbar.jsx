import React from "react"
import {Link, Redirect} from "react-router-dom"
import style from "./navbar.module.css"
import '../../App.css';
import { connect } from "react-redux";
import {newPost,postLike,postComment} from "../../Redux/action"
import {Post} from "./Post"

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postValue:"",
            commentText:""         
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLikes=(id,username,PostId,Post)=>{        
        const {handleLikeAdd} = this.props
        let PostLikes = Post
        this.props.handleLikes({id,username,PostId,PostLikes})         
    }

    handleComment=(uuid,commentText,author,Comments,postId)=>{
        // console.log(commentText)
        let Comment = Comments 
        this.props.Comment({uuid,commentText,author,Comment,postId})
    }

    render(){
        const {isAuth,user,post,postData,Comment} = this.props
        const {postValue,commentText} = this.state
        const {user_name,username_fullname,avatar,id} = user
        // console.log(postData)

        if(!isAuth){return(<Redirect to="/"/>)}
        return(
            <div style={{backgroundColor:"#F3F2EF"}}>
{/* -----------------------NAVBAR----------------------------------------------------------- */}
            <div className="shadow-sm m-0 p-0 bg-white rounded" style={{display:"flex"}}>
                <div style={{display:"flex",marginLeft:"200px"}}>
                    <div> <h1 className="text-primary"><i className="fab fa-linkedin"></i></h1> </div>
                    <div className="pt-2 pl-2">
                        <input type="text" placeholder="Search" style={{ width:"250px",border:"none",backgroundColor:"#EEF3F8",padding:"5px",marginTop:"1px"}}/>
                    </div> 
                </div>
                <div className={style.menuBtn} style={{textAlign:"center"}}>
                <div className=" border-bottom border-dark">
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-home"></i>
                        </h5>
                         <small>Home</small> 
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-user-friends"></i>
                        </h5>
                        <small>My Network</small>
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-briefcase"></i>
                        </h5>
                        <small>Jobs</small>                         
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-comment-dots"></i>
                        </h5>
                        <small>Messaging</small>                         
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-bell"></i>
                        </h5>
                        <small>Notifications</small>                         
                    </div>
                </div><hr/>
                <div className="border-right text-body">
                    <div className="mr-3">
                        <div><img src={user.avatar} style={{width:"22px",borderRadius:"50%"}} alt="" className=""/></div>
                        <small>Me <i className="fas fa-sort-down"></i></small>
                    </div>
                </div>
                <div  className="text-body">
                    <div>
                        <h5 className="p-0 m-0">
                            <i className="fab fa-buromobelexperte"></i>
                        </h5>
                        <small>Work <i className="fas fa-sort-down"></i></small>
                    </div>              
                </div>
                <div>
                    <small className="text-success">Try Premium Free <br/> For 1 Month.</small>
                </div>
                </div>               
            </div>

{/* ----------------------------HOME PAGE----------------------------------------- */}
        
            <div style={{display:"flex",width:"1300px",textAlign:"center",marginTop:"40px"}} >
            {/* -------------------USER PROFILE------------------- */}
                <div style={{flex:"1.5",marginLeft:"200px"}}>
                    <div className="p-3 ">
                    <div className="card rounded-lg">
                    <img style={{width:"125px",marginLeft:"60px"}} className="rounded-circle card-img-top mt-3" alt="avatar" src={user.avatar}></img>
                    <div className="card-body">
                    <h5 className="card-title">{user.username_fullname}</h5>
                        <small className="card-text text-muted">Learning MERN Stack, Aspiring Full Stack Developer At Masai School Bengaluru, Karnataka.</small>
                    </div>
                    <div className="border-top  border-bottom">
                    <p className="mt-3">                        
                        <small className="float-left ml-3 text-muted">Who viewed your profile</small> <small className="float-right mr-3 text-muted">34</small> 
                    </p> <br/>
                    <p className="">                        
                        <small className="float-left ml-3 text-muted">Connection </small> <small className="float-right mr-3 text-muted">500+</small> 
                    </p><br/>
                    <p className="float-left ml-3">
                    <small className="text-muted">Access exclusive tools & insites </small> <br/>
                    <small>Try Premium free for 1 months</small>
                    </p>  
                    </div>                 
                    <div>
                    <p className="font-weight-bold float-left ml-3"><i className="fas fa-bookmark"></i> Saved Items</p>
                    </div>
                    </div>
                    </div>
                </div>
            {/* ------------------POST---------------------------- */}
                <div style={{flex:"3"}}>
                    <div className="card rounded-lg m-3">
                        <div className="card-body">
                            <input type="text" name="postValue" value={postValue} onChange={this.handleChange} placeholder="Write Your Post Here" className="rounded-pill" style={{float:"left",outline:"none",padding:"10px",width:"90%",border:"none",backgroundColor:"#EEF3F8"}}/>
                            <button onClick={()=>post({postValue,user_name,username_fullname,avatar})} style={{float:"left",border:"none",padding:"7px",backgroundColor:"#0B66C2",color:"white"}} className="mt-1 rounded-lg">Post</button>
                        </div>
                    </div>
                    <div>
                    {postData && postData.sort((a,b)=>(b.id-a.id)).map(item=><Post handleComment={this.handleComment} handleLikes={this.handleLikes} key={item.id} username_fullname={username_fullname} id={id} item={item}/>)}                   
                    </div>                     
                </div>

            {/* -------------------NEWS-------------------------- */}
                <div style={{flex:"1.5"}}>
                    <div className="card rounded-lg m-3">
                        <div className="card-body">
                            <p className="text-left">Likedln News</p>                            
                            <p className="p-0 m-0 font-weight-bolder text-left">
                                <i className="text-primary fas fa-dot-circle"></i> Stuck in your career.
                            </p>
                                <small className="p-0 font-weight-light">1 day ago . 23123 readers</small>
                            <p className="p-0 m-0 font-weight-bolder text-left">
                                <i className="text-primary fas fa-dot-circle"></i>The Skills employers.
                            </p>
                                <small className="p-0 font-weight-light">4 hrs ago . 987987 readers</small>
                            <p className="p-0 m-0 font-weight-bolder text-left">
                                <i className="text-primary fas fa-dot-circle"></i> Wipro sets stages.
                            </p>
                                <small className="p-0 font-weight-light">21 hrs ago . 9312 readers</small>
                            <p className="p-0 m-0 font-weight-bolder text-left">
                                <i className="text-primary fas fa-dot-circle"></i>H&M beats zara.
                            </p>
                                <small className="p-0 font-weight-light">1 day ago . 675 readers</small>

                        </div>
                    </div>
                </div>
            </div>
        
            
            </div>
        )
    }
}

const mapStateToProps = state=> ({
    isAuth:state.isAuth,
    user:state.user,
    postData:state.postData
})

const mapDispatchToProps = dispatch => ({
    post:(payload)=>(dispatch(newPost(payload))),
    handleLikes:(payload)=>(dispatch(postLike(payload))),
    Comment:(payload)=>(dispatch(postComment(payload)))    
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)