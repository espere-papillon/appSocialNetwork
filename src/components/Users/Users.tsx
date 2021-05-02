import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";
import styles from "./Users.module.css"
import  axios from "axios";
import {AppStateType} from "../../redux/redux-store";

type dataPropsType = {
    users: Array<UserType>
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<dataPropsType, AppStateType> {
    constructor(props: dataPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={styles.container}>
            {this.props.users.map(user => <div key={user.id} className={styles.containerUser}>
                    <div className={styles.avatarFollow}>
                        <div>
                            <img className={styles.avatar} src={user.photos.small !== null ? user.photos.small : userImg} alt={"Avatar" + user.name} />
                        </div>
                        {user.followed ? <button onClick={() => {this.props.unfollowUser(user.id)}}>Unfollow</button> : <button onClick={() => {this.props.followUser(user.id)}}>Follow</button>}
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
}

export default Users;