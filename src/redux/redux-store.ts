import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {authReducer, AuthUsersActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer, AuthAppActionsType} from "./app-reducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type GetAppStateType = () => AppStateType;

export type AppActionType = ProfileActionsType | DialogsActionsType | UsersActionsType | AuthUsersActionsType | AuthAppActionsType

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.__store__ = store;

