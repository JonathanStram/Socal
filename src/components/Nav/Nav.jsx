import React from 'react';
import s from '../Nav/Nav.module.css';
import {NavLink} from "react-router-dom";
console.log (s); 

const Nav = () => {
    return <nav className = {s.nav}>
    <div className = {s.item}>
        <img className = 'img-res' src = 'http://s1.iconbird.com/ico/2013/6/269/w512h5121371227588home.png'/>
        <NavLink to="/profile" activeClassName={s.activeLink}> Моя Сторінка</NavLink>
    </div>
    <div className = {s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}> Новини </NavLink>
    </div>
    <div className = { `${s.item} ${s.active}`}>
     <img className = 'img-res' src = 'http://lgbtihealth.org.au/wp-content/uploads/2017/11/email.png'/>
        <NavLink to="/dialogs" activeClassName={s.activeLink}> Повідомлення </NavLink>
    </div>
    <div className = {s.item}>
        <NavLink to="/friends" activeClassName={s.activeLink}> Друзі </NavLink>
    </div>
    <div className = {s.item}>
        <img scr = ''/>
        <NavLink to="/group" activeClassName={s.activeLink}> Групи </NavLink>
    </div>
    <div className = {s.item}>
        <NavLink to="/photo" activeClassName={s.activeLink}> Фотографії </NavLink>
    </div>
    <div className = {s.item}>
        <img scr = ''/>
        <NavLink to="/music" activeClassName={s.activeLink}> Музика </NavLink>
    </div>
    <div className = {s.item}>
        <NavLink to="/videos" activeClassName={s.activeLink}> Відео </NavLink>
    </div>
</nav>
}

export default Nav;