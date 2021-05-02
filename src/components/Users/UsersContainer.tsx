import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followUserAC, setUserAC, unfollowUserAC, UserType} from "../../redux/users-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUser: (id: string) => {
            dispatch(followUserAC(id))
        },
        unfollowUser: (id: string) => {
            dispatch(unfollowUserAC(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)