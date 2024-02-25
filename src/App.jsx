import styles from './App.module.css';

function App() {
	return (<>
		<div className={styles["clock-container"]}>
			<span className={styles["clock"]}>
				00:00:00
			</span>
		</div>
	</>);
}

export default App;
