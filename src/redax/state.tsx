import {addPostAC, ProfilePageType, profileReduser, updateNewPostTextAC} from "../components/Navbar/profile-reducer";
import {addMessageAC, DialogsPageType, dialogsReduser, updateNewMessageTextAC} from "../components/Navbar/dialogs-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type RootStoreType = {
    _state: StateType
    _rerenderEntireTree: () => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>


export let store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", title: "Hello", likesCount: 5},
                {id: "2", title: "How are u?", likesCount: 6},
                {id: "3", title: "Fine", likesCount: 4},
                {id: "4", title: "Thank u", likesCount: 10}
            ],
            newPostText: "it-kamasutra",
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Marina"},
                {id: "2", name: "Karina"},
                {id: "3", name: "Stas"}
            ],
            messages: [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are u?"},
                {id: "3", message: "Yoo"}
            ],
            newMessageText: "hey",
        }
    },

    _rerenderEntireTree() {
        alert("State changed")
    },

    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    },
}