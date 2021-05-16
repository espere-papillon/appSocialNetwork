import axios from "axios";

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

export const authAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<dataUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}