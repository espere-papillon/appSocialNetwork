import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";
import {toggleIsFollowingInProgress, unfollowUser} from "./users-reducer";

export type DataUserLoginType = {
    id: number
    login: string
    email: string
}

let initialState = {
    data: {
        id: 1,
        login: "test",
        email: "test@test"
    } as DataUserLoginType,
    messages: [] as Array<string>,
    fieldErrors: [] as Array<string>,
    resultCode: 0,
    isAuth: false
}

export type InitialStateUsersType = typeof initialState

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: "SET-USER-DATA",
        data: {id, login, email}
    } as const
}

export type AuthUsersActionsType =
    ReturnType<typeof setAuthUserData>


export const authReducer = (state: InitialStateUsersType = initialState, action: AuthUsersActionsType): InitialStateUsersType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                data: {...action.data},
                isAuth: true,
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
            dispath(setAuthUserData(id, login, email))
        }
    }



