import React from "react";
import {ActionsType, StateType} from "../../../redax/store";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profile-reducer";
import {Posts} from "./Posts";

type postsPropsType = {
    state: StateType
    dispatch: (action: ActionsType) =>void
}

export const PostsContainer: React.FC<postsPropsType> = (props) => {
    let addPost = () => {
        props.dispatch(addPostAC(props.state.profilePage.newPostText))
    }

    let updateNewPostText = (text: string) => {props.dispatch(updateNewPostTextAC(text))}

    return (
        <Posts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} />
    )
}
