import {AppThunk} from "./redux-store";
import {authentication} from "./auth-reducer";

let initialState = {
    initialized: false
}

export type InitialStateUsersType = typeof initialState

export const setInitialized = () => {
    return {
        type: "SET-INITIALIZED"
    } as const
}


export type AuthAppActionsType =
    ReturnType<typeof setInitialized>


export const appReducer = (state: InitialStateUsersType = initialState, action: AuthAppActionsType): InitialStateUsersType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializeApp = (): AppThunk => dispath => {
    dispath(authentication())
    dispath(setInitialized())
}


