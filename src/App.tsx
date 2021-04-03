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
}

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
          <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                          messages={props.state.dialogsPage.messages}/>}/>
          <Route path={"/description"} render={() => <Description posts={props.state.profilePage.posts}/>}/>
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
