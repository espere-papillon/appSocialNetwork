import {createStore, combineReducers, Store} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer

})

export type AppStateType = ReturnType<typeof reducers>

export let store: Store = createStore(reducers);
