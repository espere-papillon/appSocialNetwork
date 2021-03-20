import React from "react";
import styles from "./Post.module.css";

type TypePostProps = {
    title: string
    likeCount?: number
}

export const Post = (props: TypePostProps) => {
    return (
        <div className={styles.post}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSP8oOxLZy-bSFwd2sDoNmAEB4MNILAKPHA&usqp=CAU" alt="ava" />
                {props.title}
            </div>
            <span>
                {props.likeCount} likes
            </span>
        </div>
    )
}