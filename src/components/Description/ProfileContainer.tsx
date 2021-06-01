import React, {Component} from "react";
import {AppStateType, AppThunk} from "../../redux/redux-store";
import {getProfileUser, getUserStatus, ProfileUserType, updateUserStatus} from "../../redux/profile-reducer";
import {Description} from "./Description";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
    status: string
}
type mapDispatchPropsType = {
    getProfileUser: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
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
            userId = "16741"
        }
        this.props.getProfileUser(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Description profileUser={this.props.profileUser} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        status: state.profilePage.status
    }
}

// export const ProfileUserContainer = withAuthRedirect(withRouter(connect(mapStateToProps, {getProfileUser})(ProfileContainer)))

export const ProfileUserContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)