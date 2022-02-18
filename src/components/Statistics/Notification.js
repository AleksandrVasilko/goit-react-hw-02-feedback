import React from "react";
import s from './Controls.module.css'

const Notification = ({ message }) => (<p className={s.notifMess}>{ message }</p>)
    
export default Notification