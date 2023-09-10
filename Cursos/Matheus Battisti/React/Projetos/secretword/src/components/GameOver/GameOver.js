import styles from './GameOver.module.css'

const GameOver = ({ retry, score }) => {
	return (
		<div className={styles.gameOver}>
			<h1>Game Over</h1>
			<h2>
				A sua pontuação foi: <span>{score}</span>
			</h2>
			<button onClick={retry}>Tentar novamente</button>
		</div>
	)
}

export default GameOver
