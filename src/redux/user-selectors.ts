import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users: Array<UserType>) => {
    return users.filter(u => true)
})

export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getPageSize = createSelector(getPageSizeSelector, (pageSize: number) => {
    return pageSize
})

export const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalUsersCount: number) => {
    return totalUsersCount
})

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage: number) => {
    return currentPage
})

export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching: boolean) => {
    return isFetching
})

export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (followingInProgress: Array<number>) => {
    return followingInProgress.filter(u => true)
})

