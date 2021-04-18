import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redax/state";
import {PostType} from "../Navbar/profile-reducer";

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type dataPropsType = {
    ProfilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.ProfilePage.posts}
                   newPostText={props.ProfilePage.newPostText}
                   dispatch={props.dispatch}/>
        </div>
    )
}
