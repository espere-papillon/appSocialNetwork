import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
    //logout: () => void
}

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    //logout: () => void
}

const Input = Element("input")

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} type={"password"} component={Input}/>
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

const LoginReduxForm = reduxForm<FormDataType>({form: 'email'})(LoginForm)

export const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginContainer = connect(null, {login})(Login)