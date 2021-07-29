import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";
import styles from "./Users.module.css"
import {NavLink} from "react-router-dom";

type dataPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (id: string) => void
    unfollow: (id: string) => void
}

export const User: React.FC<dataPropsType> = props => {

    const {
        user,
        follow,
        unfollow,
        followingInProgress,
    } = props

    return <div key={user.id} className={styles.containerUser}>
        <div className={styles.avatarFollow}>
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <img className={styles.avatar} src={user.photos.small !== null ? user.photos.small : userImg}
                         alt={"Avatar" + user.name}/>
                </NavLink>
            </div>
            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id.toString())
                }}>Unfollow</button> :
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id.toString())
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

}
