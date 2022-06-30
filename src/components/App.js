import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';

const App = () => {
	// write your code here
	const [time, setTime] = useState(0)


	useEffect(() => {
		time > 0
		&& setTimeout(() => setTime(prevState => {
			if (time > 0) {
				return prevState - 1
			}
			return 0
		}), 1000)
	}, [time])

	const onKeyDown = (event) => {
		if (event.key !== 'Enter') return
		const result = parseInt(event.target.value)
		if (!isNaN(result)) {
			setTime(result)
		} else {
			setTime(0)
		}
	}
	return (
		<div className="wrapper">
			<div id="whole-center">
				<h1>
					Reverse countdown for<input id="timeCount" onKeyDown={onKeyDown}/> sec.
				</h1>
			</div>
			<div id="current-time">{time}</div>
		</div>
	)
}


export default App;
