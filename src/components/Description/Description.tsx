import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsType, StateType} from "../../redax/store";
import {PostType} from "../../redax/profile-reducer";
import {PostsContainer} from "./Posts/PostsContainer";

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type dataPropsType = {
    // ProfilePage: StateType
    // dispatch: (action: ActionsType) => void
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
            {/*<PostsContainer state={props.ProfilePage}*/}
            {/*       dispatch={props.dispatch}/>*/}
        </div>
    )
}
