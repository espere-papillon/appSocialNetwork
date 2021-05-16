import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";
import styles from "./Users.module.css"
import axios from "axios";

type dataPropsType = {
    users: Array<UserType>
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<dataPropsType> = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })

            // props.setUsers(
            //     [
            //         {
            //             id: "1",
            //             avatar: userImg,
            //             followed: true,
            //             nameUser: "Cat",
            //             status: "I'm Cat",
            //             location: {city: "NY", country: "USA"}
            //         },
            //         {
            //             id: "2",
            //             avatar: userImg,
            //             followed: false,
            //             nameUser: "Tor",
            //             status: "I'm Got",
            //             location: {city: "LA", country: "USA"}
            //         },
            //         {
            //             id: "3",
            //             avatar: userImg,
            //             followed: true,
            //             nameUser: "Vanja",
            //             status: "I'm a russian man",
            //             location: {city: "Moscow", country: "Russia"}
            //         },
            //         {
            //             id: "4",
            //             avatar: userImg,
            //             followed: false,
            //             nameUser: "Crot",
            //             status: "I sleep",
            //             location: {city: "London", country: "UK"}
            //         },
            //     ]
            // )
        }
    }
    return (
        <div className={styles.container}>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(user => <div key={user.id} className={styles.containerUser}>
                    <div className={styles.avatarFollow}>
                        <div>
                            <img className={styles.avatar} src={user.photos.small !== null ? user.photos.small : userImg}
                                 alt={"Avatar" + user.name}/>
                        </div>
                        {user.followed ? <button onClick={() => {
                                props.unfollowUser(user.id.toString())
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.followUser(user.id.toString())
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
    )
}