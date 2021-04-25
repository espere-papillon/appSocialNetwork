import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redax/profile-reducer";

type postsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const Posts: React.FC<postsPropsType> = (props) => {
    let postsElements = props.posts.map(post => <Post title={post.title}
                                                      likesCount={post.likesCount}/>)

    let addPost = () => {
        props.addPost()
    }

    let updateNewPostText = (event: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostText(event.currentTarget.value)}

    return (
        <div className={styles.posts}>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              placeholder={"Enter text"}
                              onChange={updateNewPostText}/>
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
