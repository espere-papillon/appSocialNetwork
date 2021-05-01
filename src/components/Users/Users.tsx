import React from "react";
import {UserType} from "../../redux/users-reducer";
import userImg from "../../img/user.jpg";

type dataPropsType = {
    users: Array<UserType>
    followUser: (id: string) => void
    unfollowUser: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<dataPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: "1",
                    avatar: userImg,
                    followed: true,
                    nameUser: "Cat",
                    status: "I'm Cat",
                    location: {city: "NY", country: "USA"}
                },
                {
                    id: "2",
                    avatar: userImg,
                    followed: false,
                    nameUser: "Tor",
                    status: "I'm Got",
                    location: {city: "LA", country: "USA"}
                },
                {
                    id: "3",
                    avatar: userImg,
                    followed: true,
                    nameUser: "Vanja",
                    status: "I'm a russian man",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: "4",
                    avatar: userImg,
                    followed: false,
                    nameUser: "Crot",
                    status: "I sleep",
                    location: {city: "London", country: "UK"}
                },
            ]
        )
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                    <div>
                        <span>
                            <img src={user.avatar} alt={"Avatar" + user.nameUser} />
                        </span>
                        {user.followed ? <button onClick={() => {props.unfollowUser(user.id)}}>Unfollow</button> : <button onClick={() => {props.followUser(user.id)}}>Follow</button>}
                    </div>
                    <div>
                        <div>
                            <span>{user.nameUser}</span>
                            <span>{user.status}</span>
                        </div>
                        <div>
                            <span>{user.location.city}</span>
                            <span>{user.location.country}</span>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}