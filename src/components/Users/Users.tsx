import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";
import styles from "./Users.module.css"
import  axios from "axios";
import {AppStateType} from "../../redux/redux-store";

type dataPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends React.Component<dataPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
console.log(pagesCount)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={styles.container}>
            <div>
                {pages.map(p => {return <span className={this.props.currentPage === p ? styles.selectedPage:styles.allPage} onClick={(event) => this.onPageChanged(p)}>{p}</span>})}
            </div>
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