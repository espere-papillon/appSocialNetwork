import {ActionsType} from "./store";


export type PostType = {
    id?: string
    title: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export const addPostAC = (text: string) => {
    return {
        type: "ADD-POST",
        text
        // newPostText: store.getState().newPostText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

let initialState = {
    posts: [
        {id: "1", title: "Hello", likesCount: 5},
        {id: "2", title: "How are u?", likesCount: 6},
        {id: "3", title: "Fine", likesCount: 4},
        {id: "4", title: "Thank u", likesCount: 10}
    ] as Array<PostType>,
    newPostText: "it-kamasutra",
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: new Date().getTime().toString(),
                title: action.text,
                likesCount: 0,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts, newPost]
            stateCopy.newPostText = ""
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state;
    }
}