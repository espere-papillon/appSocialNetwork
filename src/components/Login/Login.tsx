import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Input = Element("input")

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}