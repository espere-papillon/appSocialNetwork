import React from "react";
import {
    addMessage,
    updateNewMessageText
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessageText: (text: string) => {
            dispatch(updateNewMessageText(text))
        },
        addMessage: () => {
            dispatch(addMessage())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)