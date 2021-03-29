import React from "react";
import styles from "./Description.module.css"
import {Posts} from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redax/state";

export type dataPropsType = {
    posts: Array<PostType>
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.posts} />
        </div>
    )
}
