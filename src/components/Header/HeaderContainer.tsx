import React from "react";
import styles from "./Header.module.css";
import {AppStateType} from "../../redux/redux-store";
import {authentication, DataUserLoginType, logout, setAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";

type dataPropsType = {
    data: DataUserLoginType
    resultCode: number
    messages: Array<string>
    fieldErrors: Array<string>
    isAuth: boolean
    setAuthUserData: (id: number, login: string, email: string, isAuth: boolean) => void
    authentication: () => void
    logout: () => void
}

class HeaderAPIComponent extends React.Component<dataPropsType, AppStateType>{
    componentDidMount() {
        this.props.authentication()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.data.login} logout={this.props.logout}/>;
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
    authentication,
    logout
})(HeaderAPIComponent)
