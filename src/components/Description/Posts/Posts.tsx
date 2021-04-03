import React from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";
import {dataPropsType} from "../Description";

export const Posts: React.FC<dataPropsType> = (props) => {
    let postsElements = props.posts.map(post => <Post title={post.title} likesCount={post.likesCount}/>)

    let newPostElemnt = React.createRef();
    const addPost = () => {
        let text = newPostElemnt.current.value;
        alert("samuraijs.com")
    }

    return (
        <div className={styles.posts}>
            <div>
                <div>
                    <textarea placeholder={"Enter text"}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
