import React from "react";
import styles from "./Posts.module.css";
import {Post, PostType} from "./Post/Post";

let PostData: Array<PostType> = [
    {id: "1", title: "Hello", likesCount: 5},
    {id: "2", title: "How are u?", likesCount: 6},
    {id: "3", title: "Fine", likesCount: 4},
    {id: "4", title: "Thank u", likesCount: 10},
]

let postsElements = PostData.map(post => <Post title={post.title} likesCount={post.likesCount}/>)

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <div>
                <div>
                    <textarea placeholder={"Enter text"}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
