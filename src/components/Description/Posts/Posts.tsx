import React from "react";
import styles from "./Posts.module.css";
import {Post, PostType} from "./Post/Post";

let PostData: Array<PostType> = [
    {id: "1", title: "Hello", likesCount: 5},
    {id: "2", title: "How are u?", likesCount: 6},
    {id: "3", title: "Fine", likesCount: 4},
    {id: "4", title: "Thank u", likesCount: 10},
]

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
                <Post title={'Hello'} likesCount={5}/>
                <Post title={'How are u?'} likesCount={6}/>
                <Post title={'Fine'} likesCount={10}/>
                <Post title={'Thank u'} likesCount={20}/>
            </div>
        </div>
    )
}
