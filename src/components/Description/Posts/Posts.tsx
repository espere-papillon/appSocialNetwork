import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type postsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

type dataAddPostPropsType = {
    newPostText: string
}

export const Posts: React.FC<postsPropsType> = (props) => {
    let postsElements = props.posts.map(post => <Post title={post.title}
                                                      likesCount={post.likesCount}/>)

    let addNewPost = (values: dataAddPostPropsType) => {
        debugger
        props.addPost(values.newPostText)
    }

    return (
        <div className={styles.posts}>
            <AddPostReduxForm onSubmit={addNewPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm: React.FC<InjectedFormProps<dataAddPostPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={"textarea"}
                           name={"newPostText"}
                           placeholder={"Enter post"}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<dataAddPostPropsType>({form: 'addPostForm'})(AddPostForm)
