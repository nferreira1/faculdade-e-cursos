import { useState, useEffect } from "react";

// 4 - Hook customizado
export const useFetch = (url) => {
	const [dados, setDados] = useState(null)

	// 5 - Refatorando o POST
	const [config, setConfig] = useState(null)
	const [metodo, setMetodo] = useState(null)
	const [callFetch, setCallFetch] = useState(false)

	const httpConfig = (dados, metodo) => {
		if (metodo === 'POST') {
			setConfig({
				method: metodo,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dados)
			})
		}

		setMetodo('POST')
	}

	useEffect(() => {
		const fetchData = async () => {

			const response = await fetch(url)
			const json = await response.json()

			setDados(json)
		}

		fetchData()
	}, [url, callFetch])

	// 5 - Refatorando o POST
	useEffect(() => {

		const httpRequest = async () => {
			if (metodo === 'POST') {

				const response = await fetch(url, config)
				const json = await response.json()

				setCallFetch(json)
			}
		}

		httpRequest()

	}, [config, metodo, url])

	return { dados, httpConfig }
}
