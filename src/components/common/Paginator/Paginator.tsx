import React from "react";
import styles from "./Paginator.module.css"

type dataPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<dataPropsType> = props => {

    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    console.log(pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : styles.allPage}
                             onClick={(event) => onPageChanged(p)}>{p}</span>
            })}
        </div>
}
