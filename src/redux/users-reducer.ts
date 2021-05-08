import userImg from "../img/user.jpg"

export type LocationUserType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string
    location: LocationUserType
}

// export type InitialStateUsersType = {
//     users: Array<UserType>
// }

let initialState = {
    users: [
        // {id: "1", avatar: userImg, followed: true, nameUser: "Cat", status: "I'm Cat", location: {city: "NY", country: "USA"}},
        // {id: "2", avatar: userImg, followed: false, nameUser: "Tor", status: "I'm Got", location: {city: "LA", country: "USA"}},
        // {id: "3", avatar: userImg, followed: true, nameUser: "Vanja", status: "I'm a russian man", location: {city: "Moscow", country: "Russia"}},
        // {id: "4", avatar: userImg, followed: false, nameUser: "Crot", status: "I sleep", location: {city: "London", country: "UK"}},
    ] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 400,
    currentPage: 1,
    isFetching: true,
}

export type InitialStateUsersType = typeof initialState

export const followUser = (id: string) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowUser = (id: string) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "SET-TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

type UsersActionsType =
    ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


export const usersReducer = (state: InitialStateUsersType = initialState, action: UsersActionsType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case "SET-TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}