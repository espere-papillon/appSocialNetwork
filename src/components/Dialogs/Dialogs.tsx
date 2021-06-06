import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

type dataPropsType = {
    dialogsPage: DialogsMessagePropsType
    isAuth: boolean
    addMessage: (newMessageText: string) => void
}

type dataAddMessagePropsType = {
    newMessageText: string
}

export const Dialogs: React.FC<dataPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    const addNewMessage = (formData: dataAddMessagePropsType) => {
        console.log(formData.newMessageText)
        props.addMessage(formData.newMessageText)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    );
}

const Textarea = Element("textarea")

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<dataAddMessagePropsType>> = (props) => {
    return(
        <form className={styles.areaAddMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageText"}
                       validate={[required, maxLength50]}
                       placeholder={"Enter message"} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<dataAddMessagePropsType>({form: 'addMessageForm'})(AddMessageForm)
