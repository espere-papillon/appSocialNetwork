import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";
import {toggleIsFollowingInProgress, unfollowUser} from "./users-reducer";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

export type DataUserLoginType = {
    id: number
    login: string
    email: string
}

let initialState = {
    data: {
        id: 0,
        login: "",
        email: ""
    } as DataUserLoginType,
    messages: [] as Array<string>,
    fieldErrors: [] as Array<string>,
    resultCode: 0,
    isAuth: false
}

export type InitialStateUsersType = typeof initialState

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {id, login, email, isAuth}
    } as const
}


export type AuthUsersActionsType =
    ReturnType<typeof setAuthUserData>
    | FormAction


export const authReducer = (state: InitialStateUsersType = initialState, action: AuthUsersActionsType): InitialStateUsersType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                data: {...action.payload},
                isAuth: action.payload.isAuth,
            }
        }
        default:
            return state;
    }
}

export const authentication = (): AppThunk =>
    async dispath => {
        const res = await authAPI.authUser()
        if (res.resultCode === 0) {
            let {id, login, email} = res.data
            dispath(setAuthUserData(id, login, email, true))
        }
    }

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    async dispath => {
    const res = await authAPI.login(email, password, rememberMe)
        if (res.resultCode === 0) {
            dispath(authentication())
        } else {
            const messageError = res.messages.length > 0 ? res.messages[0] : "Some error"
            dispath(stopSubmit("login", {_error: messageError}))
        }
    }

export const logout = (): AppThunk =>
    async dispath => {
        const res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispath(setAuthUserData(0, "", "", false))
        }
    }



