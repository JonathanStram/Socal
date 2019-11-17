import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className = {s.dialog + ' ' + s.active}>
           <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
     {id:1,name: 'Dima'},
     {id:2,name: 'Vika'},
     {id:3, name: 'Dania'},
     {id:4,name:'Romka'},
     {id:5,name: 'Ka4an'}
    
    ]


    let messagesData = [
        {id:1,message: 'Привіт, як прави?'},
        {id:2,message: 'Гоу на півашку'},
        {id:3,message: 'Ти сьогодні в Фоксі?'},
        {id:4,message:'Шо ти як ти?'},
        {id:5,message: 'Маю замовників!'}
       
       ]
   
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
            <DialogItems name = {dialogsData[0].name} id = {dialogsData[0].id} />
            <DialogItems name = {dialogsData[1].name} id = {dialogsData[1].id} />
            </div>
            <div className = {s.messages}>
                 <Message message = "Привіт, як прави?"/>
                 <Message message = "Гоу на півашку"/>
                 <Message message = "Ти сьогодні в Фоксі?"/>
                 
            </div>
        </div>
    )
}


export default Dialogs;