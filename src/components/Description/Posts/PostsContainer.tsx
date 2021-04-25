import React from "react";
import {ActionsType, StateType, store} from "../../../redax/store";
import {addPostAC, updateNewPostTextAC} from "../../../redax/profile-reducer";
import {Posts} from "./Posts";
import {StoreContext} from "../../../StoreContext";

type postsPropsType = {
    // state: StateType
    // dispatch: (action: ActionsType) =>void
}

export const PostsContainer: React.FC<postsPropsType> = (props) => {
    // let addPost = () => {
    //     props.dispatch(addPostAC(props.state.profilePage.newPostText))
    // }
    //
    // let updateNewPostText = (text: string) => {props.dispatch(updateNewPostTextAC(text))}

    // return (
    //     <Posts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} />
    // )
    return (
        <StoreContext.Consumer>
            { store => {
                let addPost = () => {
                    store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                }

                let updateNewPostText = (text: string) => {store.dispatch(updateNewPostTextAC(text))}
                return <Posts updateNewPostText={updateNewPostText} addPost={addPost} posts={store.getState().profilePage.posts}
                       newPostText={store.getState().profilePage.newPostText}/>}}
        </StoreContext.Consumer>
    )
}
