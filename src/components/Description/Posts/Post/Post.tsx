import React from "react";
import styles from "./Post.module.css";
import {PostType} from "../../../../redax/state";

export const Post: React.FC<PostType> = (props) => {
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