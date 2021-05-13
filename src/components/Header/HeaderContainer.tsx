import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import {AppStateType} from "../../redux/redux-store";
import {AuthUsersActionsType, DataUserLoginType, setAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser
} from "../../redux/users-reducer";

type dataPropsType = {
    data: DataUserLoginType
    resultCode: number
    messages: Array<string>
    fieldErrors: Array<string>
    isAuth: boolean
    setAuthUserData: (id: number, login: string, email: string) => void
}

class HeaderAPIComponent extends React.Component<dataPropsType, AppStateType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)

                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.data.login}/>;
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        data: state.auth.data,
        messages: state.auth.messages,
        resultCode: state.auth.resultCode,
        fieldErrors: state.auth.fieldErrors,
        isAuth: state.auth.isAuth,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData,
})(HeaderAPIComponent)
