import styles from './GameOver.module.css'

const GameOver = ({ retry }) => {
	return (
		<div className={styles.gameOver}>
			<h1>Game Over</h1>
			<button onClick={retry}>Retry</button>
		</div>
	)
}

export default GameOver
