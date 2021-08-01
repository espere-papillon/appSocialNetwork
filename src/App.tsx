import React, {lazy} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = lazy(() =>
    import('./components/Dialogs/DialogsContainer')
        .then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);
const ProfileUserContainer = lazy(() =>
    import('./components/Description/ProfileContainer')
        .then(({ ProfileUserContainer }) => ({ default: ProfileUserContainer })),
);

type mapStatePropsType = {
    initialized: boolean
}
type mapDispatchPropsType = {
    initializeApp: () => void
}

type AppPropsType = mapStatePropsType & mapDispatchPropsType

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileUserContainer)

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={ () => <SuspendedDialogs />}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/profile/:userId?"} render={() => <SuspendedProfile />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/login"} render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}), withRouter)(App);
