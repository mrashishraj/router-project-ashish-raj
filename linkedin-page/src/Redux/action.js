import React from "react"
import {
    POST_LOGIN_DATA_REQUEST,
    POST_LOGIN_DATA_SUCCESS,
    POST_LOGIN_DATA_FAILURE,

    NEW_POST_REQUEST,
    NEW_POST_SUCCESS,
    NEW_POST_FAILURE,

    FETCH_POST_DATA_REQUEST,
    FETCH_POST_DATA_SUCCESS,
    FETCH_POST_DATA_FAILURE,

    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
    POST_LIKE_FAILURE,

    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,

    } from "./actionType"

import axios from "axios"
// --------------POST DATA---------------------------

export const fetchPostDataRequest = payload => ({
    type:FETCH_POST_DATA_REQUEST,
    payload
})

export const fetchPostDataSuccess = payload => ({
    type:FETCH_POST_DATA_SUCCESS,
    payload
})

export const fetchPostDataFailure = payload => ({
    type:FETCH_POST_DATA_FAILURE,
    payload
})

export const fetchPostData = payload => dispatch =>{
    dispatch(fetchPostDataRequest(payload))
    axios.get("http://localhost:3000/post")
    .then(res=>dispatch(fetchPostDataSuccess(res)))
    .catch(err=>dispatch(fetchPostDataFailure(err)))
}
    
// ----------------LOGIN ACTION-------------------

export const postLoginRequest = payload =>({
   type:POST_LOGIN_DATA_REQUEST,
    payload
})

export const postLoginSuccess = payload =>({
   type:POST_LOGIN_DATA_SUCCESS,
    payload
})

export const postLoginFailure = payload =>({
   type:POST_LOGIN_DATA_FAILURE,
    payload
})


export const postLoginData = payload => dispatch => {
    // console.log(payload)
    dispatch(postLoginRequest(payload))
    axios.get(`http://localhost:3000/users?user_name=${payload.username}&&password=${payload.password}`)
    .then(res=>(res.data.length>0?dispatch(postLoginSuccess(res)):dispatch(postLoginFailure(res))))
    .then(()=>dispatch(fetchPostData()))
}



// -------------------NEW POST ACTION---------------------

export const newPostRequest = payload => ({
    type:NEW_POST_REQUEST,
    payload
})

export const newPostSuccess = payload => ({
    type:NEW_POST_SUCCESS,
    payload
})

export const newPostFailure = payload => ({
    type:NEW_POST_FAILURE,
    payload
})

export const newPost = payload => dispatch => {
    dispatch(newPostRequest(payload))
    // console.log(payload)
    axios.post("http://localhost:3000/post",{
        author_name:payload.username_fullname,
        author_username:payload.user_name,
        author_title:"student",
        author_avatar:payload.avatar,
        body:payload.postValue,
        comments:[],
        likes:[]
    })
    .then(res=>dispatch(newPostSuccess(res)))
    .then(res=>dispatch(fetchPostData(res)))
    .catch(err=>dispatch(newPostFailure(err)))
}

// -----------------------HANDLE LIKES ----------------------------

export const postLikeRequest = payload => ({
    type:POST_LIKE_REQUEST,
    payload
})
export const postLikeSuccess = payload => ({
    type:POST_LIKE_SUCCESS,
    payload
})
export const postLikeFailure = payload => ({
    type:POST_LIKE_FAILURE,
    payload
})
export const postLike = payload => dispatch => {
    // console.log(payload)
    const {id,username,PostId,PostLikes} = payload
    // console.log(PostLikes)
    let obj = PostLikes.find(item=>item.user_id==id)
    let data = []
    // console.log(obj)
    if(obj){
        data = PostLikes.filter(like=>(like.user_id != id))
        // console.log("if", data)
    }
    else{
        data = [...PostLikes,{user_id:id,username:username}]
        // console.log("else", data)
    }
    dispatch(postLikeRequest(payload))
    
    axios.patch(`http://localhost:3000/post/${PostId}`,{likes:data})
    .then(res=>dispatch(fetchPostData(res)))
    .then(res=>dispatch(postLikeSuccess(res)))
    .catch(err=>dispatch(postLikeFailure(err)))
}

// ------------------------HANDLE COMMENTS--------------------------------

export const postCommentRequest = payload => dispatch =>({
    type:POST_COMMENT_REQUEST,
    payload
})

export const postCommentSuccess = payload => dispatch =>({
    type:POST_COMMENT_SUCCESS,
    payload
})

export const postCommentFailure = payload => dispatch =>({
    type:POST_COMMENT_FAILURE,
    payload
})

export const postComment = payload => dispatch =>{
    console.log(payload)
    postCommentRequest(payload)
    const {uuid,commentText,author,Comment,postId} = payload
    let data = [...Comment,{id:uuid,comment_body:commentText,comment_author:author}]    
    axios.patch(`http://localhost:3000/post/${postId}`,{comments:data})
    .then(res=>dispatch(postCommentSuccess(res)))
    .then(res=>dispatch(fetchPostData(res)))
    .catch(err=>dispatch(postCommentFailure(err)))

}