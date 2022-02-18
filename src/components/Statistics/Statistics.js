import React from "react";
import Controls from './Controls';
import StaticRes from './StaticRes'



class Statistics extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

     handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    
    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return (good + bad + neutral)
    }

    countPositiveFeedbackPercentage = () => {
        const { good, bad, neutral } = this.state;
        let result = (good / (good + bad + neutral) * 100);
        return (isNaN(result) ? 0 : result)
    }

    render() {
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback();
        const rating = Math.round(this.countPositiveFeedbackPercentage());
       
        
        return (
            <div className="Statistics">
                <p>Please leave feetback</p>
                <Controls
                    onIncrementGood={this.handleIncrementGood}
                    onIncrementNeutral={this.handleIncrementNeutral}
                    onIncrementBad={this.handleIncrementBad}
                />
                <p>Statistics</p>
                <StaticRes
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    totalFeedback={total}
                    goodPercent={rating}
                />
                
                
            </div>
        )
    }
}

export default Statistics;
