import {ActionsType} from "../../redax/store";

export type PostType = {
    id?: string
    title: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


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


export const profileReduser = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: new Date().getTime().toString(),
            title: action.newPostText,
            likesCount: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText;
    }
    return state;
}