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

export let store = {
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

    rerenderEntireTree(state: StateType) {
        alert("State changed")
    },

    getState() {
      return this._state
    },

    addPost() {
        let newPost = {
            id: "55",
            title: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            id: "433223",
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this.rerenderEntireTree(this._state);
    },

    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this.rerenderEntireTree(this._state)
    },

    subscribe(observer: (state: StateType) => void) {
        this.rerenderEntireTree = observer;
    }
}