// import React from "react"
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

export const initState = {
    user:"",
    isLoading:false,
    isAuth:false,   
    isError:false,
    postData:"",
    errorMsg:""
}


export default (state = initState,{type,payload})=>{
    switch(type){
//----------------LOGIN ---------------------- 
        case POST_LOGIN_DATA_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case POST_LOGIN_DATA_SUCCESS:
                // console.log(payload)
            return{
                ...state,
                isLoading:false,
                user:payload.data[0],
                isAuth:true
            };
            // console.log(state)
        case POST_LOGIN_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                errMsg: "wrong credential"
            };

// ------------------NEW POST -----------------------
        case NEW_POST_REQUEST:
            return{
                ...state,
                isLoading:true,                
            };    
        case NEW_POST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isAuth:true
            };
        case NEW_POST_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
                errorMsg:payload.message
            };
// ----------------FETCH POST DATA-------------------------
        case FETCH_POST_DATA_REQUEST:
            return{
                ...state,
                isloading:true,
            };
        case FETCH_POST_DATA_SUCCESS:
            // console.log(payload)
            return{
                ...state,
                isLoading:false,
                postData:payload.data,
            }
        case FETCH_POST_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                errorMsg:payload.message
            };

// --------------------LIKES ADD-----------------------
        case POST_LIKE_REQUEST:
            return{
                ...state,
                isLoading:true,                
            };
        case POST_LIKE_SUCCESS:
            return{
                ...state,
                isLoading:false,                
            };
        case POST_LIKE_FAILURE:
            return{
                ...state,
                isLoading:false,
                errorMsg:payload.message
            }; 
//-------------------COMMENT REQUEST------------------------
        case POST_COMMENT_REQUEST:            
            return{
                ...state,
                isLoading:true
            };
        case POST_COMMENT_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading:false,               
            };
        case POST_COMMENT_FAILURE:
            return{
                ...state,
                isLoading:false,
                errorMsg:payload.message
            }

        default:
            return state;
    }
}