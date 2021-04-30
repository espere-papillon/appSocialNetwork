import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type postsPropsType = {
    // state: StateType
    // dispatch: (action: ActionsType) =>void
}

// export const PostsContainer: React.FC<postsPropsType> = (props) => {
//     // let addPost = () => {
//     //     props.dispatch(addPostAC(props.state.profilePage.newPostText))
//     // }
//     //
//     // let updateNewPostText = (text: string) => {props.dispatch(updateNewPostTextAC(text))}
//
//     // return (
//     //     <Posts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} />
//     // )
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 let addPost = () => {
//                     store.dispatch(addPostAC(store.getState().profilePage.newPostText))
//                 }
//
//                 let updateNewPostText = (text: string) => {store.dispatch(updateNewPostTextAC(text))}
//                 return <Posts
//                     updateNewPostText={updateNewPostText}
//                     addPost={addPost}
//                     posts={store.getState().profilePage.posts}
//                     newPostText={store.getState().profilePage.newPostText}/>}}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)