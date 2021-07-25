import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type dataPropsType = {
    profileUser: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    setProfilePhoto: (photo: any) => void
    isOwner: boolean
}

export const Description: React.FC<dataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profileUser={props.profileUser} status={props.status} updateStatus={props.updateStatus} savePhoto={props.setProfilePhoto} isOwner={props.isOwner} />
            <PostsContainer />
        </div>
    )
}
