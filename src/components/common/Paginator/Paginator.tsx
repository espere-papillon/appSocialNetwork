import React, {useState} from "react";
import styles from "./Paginator.module.css"

type dataPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<dataPropsType> = props => {

    const {
        totalItemsCount,
        pageSize,
        currentPage,
        portionSize = 10,
        onPageChanged,
    } = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    console.log(pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = (portionNumber) * portionSize

    return <div>
        <button onClick={() => {setPortionNumber(portionNumber-1)}}>prev</button>
            {pages.filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber && p).map(p => {
                return <span className={currentPage === p ? styles.selectedPage : styles.allPage}
                             onClick={(event) => onPageChanged(p)}>{p}</span>
            })}
        <button onClick={() => {setPortionNumber(portionNumber+1)}}>next</button>
        </div>
}
