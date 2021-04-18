import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";
import {ActionsType} from "../../../redax/state";
import {addPostAC, PostType, updateNewPostTextAC} from "../../Navbar/profile-reducer";

type postsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) =>void
}

export const Posts: React.FC<postsPropsType> = (props) => {
    let postsElements = props.posts.map(post => <Post title={post.title}
                                                      likesCount={post.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    let updateNewPostText = (event: ChangeEvent<HTMLTextAreaElement>) => {props.dispatch(updateNewPostTextAC(event.currentTarget.value))}

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
