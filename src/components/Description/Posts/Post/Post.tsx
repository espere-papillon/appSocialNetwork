import React from "react";
import styles from "./Post.module.css";

export type PostType = {
    id?: string
    title: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={styles.post}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSP8oOxLZy-bSFwd2sDoNmAEB4MNILAKPHA&usqp=CAU" alt="ava" />
                {props.title}
            </div>
            <span>
                {props.likesCount} likes
            </span>
        </div>
    )
}