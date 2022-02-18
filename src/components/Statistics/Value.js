import React from "react";

const Value = ({ good, neutral, bad, totalFeedback, goodPercent}) =>
(
    <div>
        <p className='Statistics__value'> Good: {good} </p>
        <p className='Statistics__value__value'> Neutral: {neutral} </p>
        <p className='Statistics__value__value'> Bad: {bad} </p>
        
        <p className='Statistics__value'>Total: { totalFeedback } </p>
        <p className='Statistics__value'>Positive feedback: { goodPercent }% </p>
    </div>
);

export default Value;