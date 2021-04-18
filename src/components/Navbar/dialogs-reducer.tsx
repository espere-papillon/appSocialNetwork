import {ActionsType} from "../../redax/state";

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

export const dialogsReduser = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
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