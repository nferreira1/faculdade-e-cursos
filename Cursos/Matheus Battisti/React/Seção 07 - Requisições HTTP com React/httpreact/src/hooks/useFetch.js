import { useState, useEffect } from "react";

// 4 - Hook customizado
export const useFetch = (url) => {
	const [dados, setDados] = useState(null)

	// 5 - Refatorando o POST
	const [config, setConfig] = useState(null)
	const [metodo, setMetodo] = useState(null)
	const [callFetch, setCallFetch] = useState(false)

	// 6 - Loading
	const [loading, setLoading] = useState(false)

	// 8 - Tratando erros
	const [error, setError] = useState(null)

	// 9 - Desafio
	const [itemId, setItemId] = useState(null)

	const httpConfig = (dados, metodo) => {
		if (metodo === 'POST') {
			setConfig({
				method: metodo,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dados)
			})

			setMetodo('POST')
		} else if (metodo === 'DELETE') {
			setConfig({
				method: metodo,
				headers: {
					'Content-Type': 'application/json'
				},
			})

			setMetodo('DELETE')
			setItemId(dados)
		}

	}

	useEffect(() => {
		const fetchData = async () => {

			// 6 - Loading
			setLoading(true)

			try {
				const response = await fetch(url)
				const json = await response.json()

				setDados(json)
			} catch (error) {
				console.log(error?.message)
				setError("Houve algum erro ao carregar os dados.")
			}

			setLoading(false)
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
			} else if (metodo === 'DELETE') {

				const deleteUrl = `${url}/${itemId}`

				const response = await fetch(deleteUrl, config)

				const json = await response.json()

				setCallFetch(json)
			}
		}

		httpRequest()

	}, [config, metodo, url, itemId])

	return { dados, httpConfig, loading, error }
}
