import React, {Component} from "react";
import {AppStateType, AppThunk} from "../../redux/redux-store";
import {getProfileUser, ProfileUserType} from "../../redux/profile-reducer";
import {Description} from "./Description";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
}
type mapDispatchPropsType = {
    getProfileUser: (userId: string) => void
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
    }

    render() {
        return (
            <Description profileUser={this.props.profileUser}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser
    }
}

// export const ProfileUserContainer = withAuthRedirect(withRouter(connect(mapStateToProps, {getProfileUser})(ProfileContainer)))

export const ProfileUserContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileUser}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)