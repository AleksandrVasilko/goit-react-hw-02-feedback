import React from "react";
import propTypes from 'prop-types';
import s from './Controls.module.css'

const Controls = ({ options, onHandleClick }) => (
    <ul className={s.buttonList}>
		{options.map(option => (
			<li className={s.buttonBox} key={option}>
				<button
					className={s.feedButton}
					type="button"
					name={option}
					onClick={() => onHandleClick(option)}
				>
					{option}
				</button>
			</li>
		))}
	</ul>
)

export default Controls;

Controls.propTypes = {
	options: propTypes.array,
	option: propTypes.string,
	onHandleClick: propTypes.func,
};