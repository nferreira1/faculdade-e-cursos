// React
import { useCallback, useEffect, useState } from 'react'

// components
import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game'
import GameOver from './components/GameOver/GameOver'

// Data
import { wordsList } from './data/words'

// CSS
import './App.css'

const stages = [
	{ id: 1, name: 'start' },
	{ id: 2, name: 'game' },
	{ id: 3, name: 'end' },
]

const guessesQty = 3

function App() {

	const [gameStage, setGameStage] = useState(stages[0].name)
	const [words] = useState(wordsList)

	const [pickedWord, setPickedWord] = useState('')
	const [pickedCategory, setPickedCategory] = useState('')
	const [letters, setLetters] = useState([])

	const [guesses, setGuesses] = useState(guessesQty)
	const [score, setScore] = useState(0)
	const [guessedLetters, setGuessedLetters] = useState([])
	const [wrongLetters, setWrongLetters] = useState([])


	const pickWordAndCategory = useCallback(() => {
		// Pick a random category
		const categories = Object.keys(words)
		const category = categories[Math.trunc(Math.random() * Object.keys(words).length)]
		console.log(category)

		console.log('Category: ' + category)
		// Pick a random word
		const word = words[category][Math.trunc(Math.random() * words[category].length)]
		console.log('Word: ' + word)

		return { word, category }
	}, [words])

	// Start game
	const startGame = useCallback(() => {

		clearStates()

		// Pick word and pick category
		const { word, category } = pickWordAndCategory()
		console.log(word, category)

		// Create an array of letters
		let wordLetters = word.toUpperCase().split('')
		console.log(wordLetters)

		// Fill states
		setPickedWord(word)
		setPickedCategory(category)
		setLetters(wordLetters)

		setGameStage(stages[1].name)
	}, [pickWordAndCategory])

	// Process the letter input
	const verifyLetter = (letter) => {
		const normalizeLetter = letter.toUpperCase()

		if (guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
			return
		}

		if (letters.includes(normalizeLetter)) {
			setGuessedLetters((prevGuessed) => [...prevGuessed, normalizeLetter])
		} else {
			setWrongLetters((prevWrong) => [...prevWrong, normalizeLetter])

			setGuesses((prevGuesses) => prevGuesses - 1)
		}
	}

	// Restart the game
	const retry = () => {
		setScore(0)
		setGuesses(guessesQty)
		setGameStage(stages[0].name)
	}

	const clearStates = () => {
		setGuessedLetters([])
		setWrongLetters([])
	}

	useEffect(() => {
		if (guesses <= 0) {
			clearStates()

			setGameStage(stages[2].name)
		}
	}, [guesses])

	useEffect(() => {
		const uniqueLetters = [...new Set(letters)]

		if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
			setScore((prevScore) => prevScore += 100)

			startGame()
		}

	}, [guessedLetters, letters, startGame, gameStage])

	return (
		<div className="App">
			{gameStage === 'start' && <StartScreen startGame={startGame} />}
			{gameStage === 'game' &&
				<Game
					verifyLetter={verifyLetter}
					pickedWord={pickedWord}
					pickedCategory={pickedCategory}
					letters={letters}
					guessedLetters={guessedLetters}
					wrongLetters={wrongLetters}
					guesses={guesses}
					score={score}
				/>
			}
			{gameStage === 'end' && <GameOver retry={retry} score={score} />}
		</div>
	)
}

export default App
