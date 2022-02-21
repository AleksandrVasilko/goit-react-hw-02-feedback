import React from "react";
import Controls from './Controls';
import StaticRes from './StaticRes'
import s from './Controls.module.css'



class Statistics extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = control => {
		this.setState({ [control]: this.state[control] + 1 });
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
                <p className={s.title}>Please leave feetback</p>
                <Controls
                    options={['good', 'neutral', 'bad']}
                    onHandleClick={this.handleClick}
                />
                <p className={s.title}>Statistics</p>
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
