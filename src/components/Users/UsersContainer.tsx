import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingInProgress,
    unfollowUser,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {authAPI} from "../../api/api";

type dataPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (userId: number, isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<dataPropsType, AppStateType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        authAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress} />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingInProgress,
})(UsersAPIComponent)