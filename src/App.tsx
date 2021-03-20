import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {Posts} from "./components/Posts/Posts";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Description />
            <Posts />
        </div>
    );
}

export default App;
