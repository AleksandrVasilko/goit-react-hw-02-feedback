import React from "react";
import s from './Controls.module.css'

const Value = ({ good, neutral, bad, totalFeedback, goodPercent}) =>
(
    <div>
        <p className={s.statistics__value}> Good: {good} </p>
        <p className={s.statistics__value}> Neutral: {neutral} </p>
        <p className={s.statistics__value}> Bad: {bad} </p>
        
        <p className={s.statistics__value}>Total: { totalFeedback } </p>
        <p className={s.statistics__value}>Positive feedback: { goodPercent }% </p>
    </div>
);

export default Value;