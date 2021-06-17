import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser, requestUsers,
    setCurrentPage,
    unfollowUser,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";

type dataPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<dataPropsType, AppStateType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.followUser} unfollow={this.props.unfollowUser}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// export const UsersContainer = connect(mapStateToProps, {followUser, unfollowUser, setCurrentPage, getUsers})(UsersAPIComponent)

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setCurrentPage,
        requestUsers
    }),
    //withAuthRedirect
)(UsersAPIComponent)