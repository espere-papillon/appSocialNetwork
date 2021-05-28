import React, {Component} from "react";
import {AppStateType} from "../../redux/redux-store";
import {getProfileUser, ProfileUserType} from "../../redux/profile-reducer";
import {Description} from "./Description";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
    isAuth: boolean
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

        // if (!this.props.isAuth) {
        //     return <Redirect to={"/login"}/>
        // }

        return (
            <Description profileUser={this.props.profileUser}/>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// @ts-ignore
export const ProfileUserContainer = connect(mapStateToProps, {getProfileUser})(WithUrlDataContainerComponent)