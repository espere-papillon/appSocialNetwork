import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {PostType, ProfileUserType, setUserProfile, updateNewPostText} from "../../redux/profile-reducer";
import {Description} from "./Description";
import axios from "axios";
import {connect} from "react-redux";


type dataPropsType = {
    profileUser: ProfileUserType | null
    setUserProfile: (profileUser: ProfileUserType) => void
}
class ProfileContainer extends React.Component<dataPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Description profileUser={this.props.profileUser} setUserProfile={this.props.setUserProfile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profileUser: state.profilePage.profileUser,
    }
}

export const ProfileUserContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainer)