import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
    // state: StateType
    // dispatch: (action: ActionsType) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                    <Route path={"/users"} render={() => <UsersContainer />}/>
                    <Route path={"/description"}
                           render={() => <Description />}/>
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
