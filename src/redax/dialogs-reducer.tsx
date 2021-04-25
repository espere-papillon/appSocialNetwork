import {ActionsType} from "./store";

export type DialogItemType = {
    id: string
    name: string
}
export type MessageType = {
    id?: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
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

let initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    if (action.type === "ADD-MESSAGE") {
        let newMessage = {
            id: new Date().getTime().toString(),
            message: state.newMessageText,
        }
        state.messages.push(newMessage)
        state.newMessageText = ""
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessageText = action.newText;
    }
    return state;
}