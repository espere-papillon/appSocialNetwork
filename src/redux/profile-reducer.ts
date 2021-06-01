import {AppThunk} from "./redux-store";
import {authAPI, profileAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

export type PostType = {
    id?: string
    title: string
    likesCount: number
}
export type ContactsUserType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type PhotosUserType = {
    small: string
    large: string
}
export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsUserType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosUserType
}

export type ProfilePageType = {
    posts: Array<PostType>
    profileUser: ProfileUserType
    newPostText: string
    status: string
}

export const addPost = (text: string) => {
    return {
        type: "ADD-POST",
        text
        // newPostText: store.getState().newPostText
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const setUserProfile = (profileUser: ProfileUserType) => {
    return {
        type: "SET-USER-PROFILE",
        profileUser
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

let initialState = {
    posts: [
        {id: "1", title: "Hello", likesCount: 5},
        {id: "2", title: "How are u?", likesCount: 6},
        {id: "3", title: "Fine", likesCount: 4},
        {id: "4", title: "Thank u", likesCount: 10}
    ] as Array<PostType>,
    profileUser: null as ProfileUserType | null,
    newPostText: "it-kamasutra",
    status: "hey",
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
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
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profileUser: action.profileUser
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

// export const _getProfileUser = (userId: number): AppThunk => {
//     return (dispath) => {
//         authAPI.getProfile(userId).then(data => {
//             dispath(setUserProfile(data))
//         })
//     }
// }

export const getProfileUser = (userId: string): AppThunk => async dispath => {
    const res = await authAPI.getProfile(userId.toString())
    dispath(setUserProfile(res))
}
export const getUserStatus = (userId: string): AppThunk => async dispath => {
    const res = await profileAPI.getStatus(userId.toString())
    dispath(setStatus(res))
}
export const updateUserStatus = (status: string): AppThunk => async dispath => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispath(setStatus(status))
    }
}
