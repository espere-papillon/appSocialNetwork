
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

export const addMessage = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageText
       // newMessageText: store.getState().newMessageText
    } as const
}

export const updateNewMessageText = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}

export type DialogsActionsType =
    ReturnType<typeof addMessage>

let initialState = {
    dialogs: [
        {id: "1", name: "Marina"},
        {id: "2", name: "Karina"},
        {id: "3", name: "Stas"}
    ] as Array<DialogItemType>,
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are u?"},
        {id: "3", message: "Yoo"}
    ] as Array<MessageType>,
}

type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                id: new Date().getTime().toString(),
                message: action.newMessageText,
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages, newMessage]
            return stateCopy
        }
        default:
            return state;
    }
}