import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";


export const Description: React.FC = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    )
}
