import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators/validators";
import stylesForm from "../../common/FormControls/FormControls.module.css"
import styles from "../Description.module.css";
import {ProfileUserType} from "../../../redux/profile-reducer";

type FormDataType = {
    profile: ProfileUserType
}

const Input = Element("input")
const TextArea = Element("textarea")

const ProfileDataForm: React.FC<InjectedFormProps<ProfileUserType, FormDataType> & FormDataType> = ({handleSubmit, error, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Name"} name={"fullName"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"About me"} name={"aboutMe"} component={TextArea}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/> Looking for a job
            </div>
            <div>
                <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={TextArea}/>
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <div className={styles.contact}>
                        <b>{key}: </b><Field placeholder={key} name={"contacts." + key} component={Input}/>
                    </div>
            })}
            </div>
            {error && <div className={stylesForm.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileUserType, FormDataType>({form: 'edit-profile'})(ProfileDataForm)

