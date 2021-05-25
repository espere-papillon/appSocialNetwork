import axios from "axios";
import {DataUserLoginType, setAuthUserData} from "../redux/auth-reducer";
import {ProfileUserType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "2915ec48-57be-426d-903d-1c83b1420c90"}
})

type dataItemUsersType = {
    id: number
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}

type dataUsersType = {
    items: Array<dataItemUsersType>
    totalCount: number
    error: string
}

export type dataAuthUserType = {
    data: DataUserLoginType
    resultCode: number
    messages: Array<string>
    fieldErrors: Array<string>
}

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<dataUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export const authAPI = {
    authUser() {
        return instance.get<dataAuthUserType>(`auth/me`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get<ProfileUserType>(`profile/` + userId)
            .then(response => response.data)
    }
}