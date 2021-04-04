import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redax/state";

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type dataPropsType = {
    ProfilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.ProfilePage.posts}
                   newPostText={props.ProfilePage.newPostText}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
