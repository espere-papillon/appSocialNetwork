import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        },
        addPost: (text: string) => {
            dispatch(addPost(text))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)