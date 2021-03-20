import React from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post title={'Hello'} likeCount={5} />
            <Post title={'How are u?'} />
            <Post title={'Fine'} likeCount={10} />
            <Post title={'Thank u'} likeCount={20} />
        </div>
    )
}
