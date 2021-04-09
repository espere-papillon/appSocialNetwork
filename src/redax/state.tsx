export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id?: string
    message: string
}

export type PostType = {
    id?: string
    title: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

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

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const addMessageAC = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageText: newMessageText
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}

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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: new Date().getTime().toString(),
                title: action.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._rerenderEntireTree();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree();
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: new Date().getTime().toString(),
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._rerenderEntireTree();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText;
            this._rerenderEntireTree()
        }
    },
}