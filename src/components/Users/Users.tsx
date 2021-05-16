import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";
import styles from "./Users.module.css"
import {NavLink} from "react-router-dom";
import {authAPI} from "../../api/api";

type dataPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    toggleIsFollowingInProgress: (userId: number, isFetching: boolean) => void
}

export const Users: React.FC<dataPropsType> = props => {

    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        followUser,
        unfollowUser,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    console.log(pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.container}>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : styles.allPage}
                             onClick={(event) => onPageChanged(p)}>{p}</span>
            })}
        </div>
        {users.map(user => <div key={user.id} className={styles.containerUser}>
                <div className={styles.avatarFollow}>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img className={styles.avatar} src={user.photos.small !== null ? user.photos.small : userImg}
                                 alt={"Avatar" + user.name}/>
                        </NavLink>
                    </div>
                    {user.followed ?
                        <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleIsFollowingInProgress(user.id, true)
                            authAPI.unfollowUser(user.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    unfollowUser(user.id.toString())
                                }
                                props.toggleIsFollowingInProgress(user.id, false)
                            })
                        }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleIsFollowingInProgress(user.id, true)
                            authAPI.followUser(user.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    followUser(user.id.toString())
                                }
                                props.toggleIsFollowingInProgress(user.id, false)
                            })
                        }}>Follow</button>}
                </div>
                <div className={styles.description}>
                    <div className={styles.descriptionUser}>
                        <span className={styles.userName}>{user.name}</span>
                        <span className={styles.userStatus}>{user.status}</span>
                    </div>
                    <div className={styles.descriptionLocation}>
                        <span className={styles.locationCity}>{"user.location.city"}</span>
                        <span className={styles.locationCountry}>{"user.location.country"}</span>
                    </div>
                </div>
            </div>
        )
        }
    </div>

}
