import {AppThunk, GetAppStateType} from "./redux-store";
import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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

export const addPost = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const deletePost = (postId: string) => {
    return {
        type: "DELETE-POST",
        postId
    } as const
}

export const setUserProfile = (profileUser: ProfileUserType) => {
    return {
        type: "SET-USER-PROFILE",
        profileUser
    } as const
}

export const setProfilePhotoSuccess = (photos: PhotosUserType) => {
    return {
        type: "SET-PROFILE-PHOTO",
        photos
    } as const
}

export const setProfileSuccess = (profile: ProfileUserType) => {
    return {
        type: "SET-PROFILE",
        profile
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
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setProfilePhotoSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setProfileSuccess>

let initialState = {
    posts: [
        {id: "1", title: "Hello", likesCount: 5},
        {id: "2", title: "How are u?", likesCount: 6},
        {id: "3", title: "Fine", likesCount: 4},
        {id: "4", title: "Thank u", likesCount: 10}
    ] as Array<PostType>,
    profileUser: {} as ProfileUserType,
    status: "hey",
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: new Date().getTime().toString(),
                title: action.newPostText,
                likesCount: 0,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts, newPost]
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
        case "SET-PROFILE-PHOTO": {
            return {
                ...state,
                profileUser: {...state.profileUser, photos: action.photos}

            }
        }
        case "SET-PROFILE": {
            return {
                ...state,
                profileUser: {...state.profileUser, fullName: action.profile.fullName, aboutMe: action.profile.aboutMe, lookingForAJob: action.profile.lookingForAJob, lookingForAJobDescription: action.profile.lookingForAJobDescription, contacts: action.profile.contacts}

            }
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state;
    }
}

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
export const setProfilePhoto = (photo: File): AppThunk => async dispath => {
    const res = await profileAPI.setProfilePhoto(photo)
    if (res.data.resultCode === 0) {
        debugger
        dispath(setProfilePhotoSuccess({small: res.data.data.small, large: res.data.data.large}))
    }
}
export const setProfile = (profile: ProfileUserType): AppThunk => async (dispath, getState: GetAppStateType) => {
    const userId = getState().auth.data.id
    const res = await profileAPI.setProfileInfo(profile)
    if (res.data.resultCode === 0) {
        debugger
        dispath(getProfileUser(userId.toString()))
    } else {
        dispath(stopSubmit("edit-profile", {_error: res.data.messages[0]}))
    }
}
