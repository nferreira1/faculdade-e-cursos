import styles from './Game.module.css'

const Game = ({ verifyLetter }) => {
	return (
		<div className={styles.game}>
			<p className={styles.points}>
				<span>Points: 000</span>
			</p>
			<h1>Guess the word</h1>
			<h3 className={styles.tip}>Word tip: <span>Dica...</span></h3>
			<div className={styles.wordContainer}>
				<span className={styles.letter}>A</span>
				<span className={styles.blankSquare}>A</span>
			</div>
			<div className={styles.letterContainer}>
				<p>Try to guess a letter of the word</p>
				<form>
					<input type="text" name='letter' maxLength='1' required />
					<button>Play</button>
				</form>
			</div>
			<div className={styles.wrongLettersContainer}>
				<p>Already used letters</p>
				<span>A,</span>
				<span>B,</span>
			</div>
		</div >
	)
}

export default Game
