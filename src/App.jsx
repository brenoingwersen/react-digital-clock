import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {

	// Current time
	const [time, setTime] = useState(new Date());

	// Creates an interval that updates the time veriable
	// every 1000 ms
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date()); // Get current time
		}, 1000);

		return () => (clearInterval(intervalId));
	}, []) // Call useEffect only on the first mount

	function formatTime() {
		const hours = time.getHours().toString().padStart(2, "0");
		const minutes = time.getMinutes().toString().padStart(2, "0");
		const seconds = time.getSeconds().toString().padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`
	}

	return (<>
		<div className={styles["clock-container"]}>
			<span className={styles["clock"]}>
				{formatTime()}
			</span>
		</div>
	</>);
}

export default App;
