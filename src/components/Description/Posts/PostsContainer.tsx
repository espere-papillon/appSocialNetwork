import {addPost} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)