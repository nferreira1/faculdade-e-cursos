// React Native
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

// React
import { useState } from 'react'

// Components
import ResultIMC from './ResultIMC'

const Form = () => {

	const [person, setPerson] = useState({
		height: '',
		weight: ''
	})
	const [IMC, setIMC] = useState(null)
	const [message, setMessage] = useState(null)

	const calcIMC = () => {
		if (Object.values(person).includes('')) {
			setMessage('PREENCHA OS CAMPOS')
			return
		}

		setIMC((person.weight / (person.height * person.height)).toFixed(2))
		setMessage(`O SEU IMC É ${IMC}`)
	}

	return (
		<View>
			<View>

				<Text>Altura</Text>
				<TextInput
					placeholder='1.75'
					keyboardType='numeric'
					value={person.height}
					onChangeText={text => setPerson({ ...person, height: text })}
				/>

				<Text>Peso</Text>
				<TextInput
					placeholder='75.00'
					keyboardType='numeric'
					value={person.weight}
					onChangeText={text => setPerson({ ...person, weight: text })}
				/>

				<Button
					title='CALCULAR'
					onPress={() => calcIMC()}
				/>

			</View>

			<ResultIMC
				message={message}
			/>

		</View>
	)
}

const styles = StyleSheet.create({

})

export default Form
