import React, {ChangeEvent} from "react";
import styles from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormControls/FormControls";

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

const Textarea = Element("textarea")

const maxLength20 = maxLengthCreator(20)

const AddPostForm: React.FC<InjectedFormProps<dataAddPostPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea}
                       name={"newPostText"}
                       validate={[required, maxLength20]}
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
