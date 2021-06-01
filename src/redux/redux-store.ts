import {createStore, combineReducers, Store, applyMiddleware} from "redux"
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {authReducer, AuthUsersActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionType = ProfileActionsType | DialogsActionsType | UsersActionsType | AuthUsersActionsType

export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store;

