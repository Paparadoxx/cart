import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SettingsContext from './../contexts/userSettings';

MyCounter.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

MyCounter.defaultProps = {
	min: 1
}

function MyCounter({ min, max, current, onChange }) {
	let [value, setValue] = useState(current);

	let increment = () => applyCurrent(current + 1);
	let decrement = () => applyCurrent(current - 1);

	const inputHandler = e => setValue(e.target.value);

	let applyStrValue = () => {
		let val = parseInt(value);
		applyCurrent(isNaN(val) ? min : val);
	}

	let applyCurrent = (number) => {
		let newCurrent = Math.max(Math.min(number, max), min);
		setValue(newCurrent);
		if (current !== newCurrent) {
			onChange(newCurrent);
		}
	}

	let settings = useContext(SettingsContext);

	useEffect(() => {
		setValue(current);
	}, [current]);

	return (<div>
		<button type='button' onClick={decrement} disabled={current <= min}>-</button>
		<input type='text' value={value} onChange={inputHandler} onBlur={applyStrValue} />
		<button type='button' onClick={increment} disabled={current >= max}
			title={settings.lang=== 'ru' ? 'увеличить': 'increase'}
		>+</button>
	</div>
	)
}

export default MyCounter;