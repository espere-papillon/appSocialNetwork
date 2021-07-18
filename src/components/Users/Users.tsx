import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {AppThunk} from "../../redux/redux-store";

type dataPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    follow: (id: string) => AppThunk
    unfollow: (id: string) => AppThunk
}

export const Users: React.FC<dataPropsType> = props => {

    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        follow,
        unfollow,
    } = props

    return <div className={styles.container}>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {users.map(user => <User user={user} followingInProgress={props.followingInProgress} follow={follow}
                                 unfollow={unfollow}/>)}
    </div>
}

