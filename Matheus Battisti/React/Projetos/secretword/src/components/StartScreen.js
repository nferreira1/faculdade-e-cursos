import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {
	return (
		<div className={styles.start}>
			<h2>Secret <span>WO<span>R</span>D</span></h2>
			<button onClick={startGame}>Start</button>
		</div>
	)
}

export default StartScreen
