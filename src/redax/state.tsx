import {rerenderEntireTree} from "../render";

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


export let state: StateType = {
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
}

export const addPost = () => {
    let newPost = {
        id: "55",
        title: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: "433223",
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state)
}