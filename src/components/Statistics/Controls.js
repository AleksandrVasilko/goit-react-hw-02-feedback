import React from "react";
import s from './Controls.module.css'

const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad}) => (
    <div>
        <button type='button' onClick={onIncrementGood} className={s.feedButton}>Good</button>
        <button type='button' onClick={onIncrementNeutral} className={s.feedButton}>Neutral</button>
        <button type='button' onClick={onIncrementBad} className={s.feedButton}>Bad</button>
    </div>
)

export default Controls;