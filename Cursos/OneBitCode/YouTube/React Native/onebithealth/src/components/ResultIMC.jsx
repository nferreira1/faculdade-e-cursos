// React Native
import { StyleSheet, Text, View } from 'react-native'

const ResultIMC = ({ resultIMC, message }) => {
	return (
		<View>
			<Text>{resultIMC}</Text>
			<Text>{message}</Text>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default ResultIMC
