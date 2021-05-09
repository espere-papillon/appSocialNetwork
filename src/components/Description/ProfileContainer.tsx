import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {PostType, ProfileUserType, setUserProfile, updateNewPostText} from "../../redux/profile-reducer";
import {Description} from "./Description";
import axios from "axios";
import {connect, MapDispatchToProps} from "react-redux";
import {RouteComponentProps, withRouter } from "react-router-dom";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
}
type mapDispatchPropsType = {
    setUserProfile: (profileUser: ProfileUserType) => void
}

type ownPropsType = mapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId: string
}
type dataPropsType = RouteComponentProps<PathParamsType> & ownPropsType

class ProfileContainer extends React.Component<dataPropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileUserContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)