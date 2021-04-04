import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {StateType} from "./redax/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={() => <Dialogs DialogsPage={props.state.dialogsPage}
                                                                    addMessage={props.addMessage}
                                                                    updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path={"/description"}
                           render={() => <Description ProfilePage={props.state.profilePage}
                                                      addPost={props.addPost}
                                                      updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    {/*<Route path={"/saved"} component={Saved}/>*/}
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
