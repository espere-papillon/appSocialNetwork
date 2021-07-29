import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileUser,
    getUserStatus,
    ProfileUserType,
    setProfilePhoto,
    updateUserStatus
} from "../../redux/profile-reducer";
import {Description} from "./Description";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStatePropsType = {
    profileUser: ProfileUserType | null
    status: string
    authorizedUserId: number
    isAuth: boolean
}
type mapDispatchPropsType = {
    getProfileUser: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    setProfilePhoto: (photo: any) => void
}

type ownPropsType = mapStatePropsType & mapDispatchPropsType

type PathParamsType = {
    userId: string
}
export type dataPropsType = RouteComponentProps<PathParamsType> & ownPropsType

class ProfileContainer extends React.Component<dataPropsType, AppStateType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId.toString()
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileUser(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<dataPropsType>, prevState: Readonly<AppStateType>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Description profileUser={this.props.profileUser}
                         status={this.props.status}
                         updateStatus={this.props.updateUserStatus}
                         setProfilePhoto={this.props.setProfilePhoto}
                         isOwner={!this.props.match.params.userId} />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.isAuth
    }
}

export const ProfileUserContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus, setProfilePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

