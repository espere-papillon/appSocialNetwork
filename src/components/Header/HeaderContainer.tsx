import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {DataUserLoginType, logout} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";

type dataPropsType = {
    data: DataUserLoginType
    resultCode: number
    messages: Array<string>
    fieldErrors: Array<string>
    isAuth: boolean
    logout: () => void
}

class HeaderAPIComponent extends React.Component<dataPropsType, AppStateType>{


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

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPIComponent)
