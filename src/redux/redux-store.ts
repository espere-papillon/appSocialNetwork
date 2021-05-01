import {createStore, combineReducers, Store} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store: Store = createStore(rootReducer);
