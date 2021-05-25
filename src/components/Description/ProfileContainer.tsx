import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, ProfileUserType} from "../../redux/profile-reducer";
import {Description} from "./Description";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter } from "react-router-dom";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
}
type mapDispatchPropsType = {
    getProfile: (userId: string) => void
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
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Description profileUser={this.props.profileUser}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileUserContainer = connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)