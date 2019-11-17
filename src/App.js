import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photos from './components/Photos/Photos';
import Videos from './components/Videos/Videos';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Group from './components/Groups/Group';
import Music from './components/Music/Music';


const App = () => {
  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
    <Header />
    <Nav />
    
    <div class = 'app-wrapper-content'>
    <Route path='/dialogs' component = {Dialogs}/>
    <Route path='/profile' component= {Profile}/>
    <Route path='/photos' component = {Photos}/>
    <Route path='/videos' component = {Videos}/>
    <Route path='/friends' component = {Friends}/>
    <Route path='/news' component = {News}/>
    <Route path='/group' component = {Group}/>
    <Route path='/music' component = {Music}/>
    </div>
    </div>
    
    </BrowserRouter>);    
}



export default App;
