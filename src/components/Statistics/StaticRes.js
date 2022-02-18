import React from "react";
import Value from "./Value";
import Notification from "./Notification";

const StaticRes = ({ good, neutral, bad, totalFeedback, goodPercent }) => (
    <p>{(good === 0 && neutral === 0 && bad === 0) ? <Notification message="There is no feedback"/> : <Value
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    totalFeedback={totalFeedback}
                    goodPercent={goodPercent}
                />}</p>
)

export default StaticRes