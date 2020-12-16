import React from "react"
import {v4 as uuid} from "uuid"

export class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            commentText:""
        }
    }

    handleComment=(e)=>{
        this.setState({
            commentText:e.target.value
        })
    }
    render(){
        const {commentText} = this.state
        // console.log(commentText)
        const {item,username_fullname,id,handleLikes,handleComment} = this.props
        let obj = item.likes.find(item=>item.user_id==id)        
        return(            
          <div className="card rounded-lg m-3">
                <div className="mt-3 ml-3">
                <div> <img src={item.author_avatar} style={{width:"32px",borderRadius:"50%",float:"left"}} alt="avatar"/> </div>
                <p className="font-weight-bold text-monospace float-left ml-3">{item.author_name}</p>
                </div>
                <div className="border-bottom mt-3">
                <p className="text-left ml-5 font-italic">{item.body}</p><br/>
                <small className="float-left ml-1"> Liked by:- {item.likes.map(item=> <small key={item.user_id}> {item.username} ,</small> )}</small>
                </div>
        {item.comments.map(item=> <p className="text-left ml-2" key={item.id}> <small>{item.comment_author}</small>  :- {item.comment_body}</p> )}
                <div>
                <button 
                    onClick={()=>handleLikes(id,username_fullname,item.id,item.likes)} 
                    style={{float:"left",border:"none",padding:"7px",backgroundColor:"white"}} 
                    className="mt-1 rounded-lg ml-3"><small>{item.likes.length} </small><i className={obj?"fas fa-heart text-danger":"far fa-heart"}> Like</i>                               
                </button> 
                <input name="commentText" value={commentText} onChange={this.handleComment} type="text" className="rounded-pill mt-2 mx-2" style={{float:"left",outline:"none",width:"50%",border:"none",backgroundColor:"#EEF3F8"}}/>

                <button 
                    onClick={()=>handleComment(uuid(),commentText,username_fullname,item.comments,item.id)} 
                    style={{float:"left",border:"none",padding:"7px",backgroundColor:"white"}} 
                    className="mt-1 rounded-lg">                                
                    <i className="far fa-comment-dots"></i> Comment 
                    </button>
                    <div>
                    </div>
                </div>
            </div>             
        )
    }
}