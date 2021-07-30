import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.css"
import {ProfileUserType} from "../../../redux/profile-reducer";

type FormDataType = {
    profileUser: ProfileUserType
}

type PropsType = {

}

const Input = Element("input")

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Name"} name={"fullName"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"About me"} name={"aboutMe"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/> Looking for a job
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<FormDataType>({form: 'edit-profile'})(ProfileDataForm)

export const Login:React.FC<PropsType> = (props) => {

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
