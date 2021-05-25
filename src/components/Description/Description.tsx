import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type dataPropsType = {
    profileUser: ProfileUserType | null
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profileUser={props.profileUser} />
            <PostsContainer />
        </div>
    )
}
