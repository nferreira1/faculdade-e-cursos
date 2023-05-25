const objs = [
	{
		"nome": "Nathan",
		"idade": 22,
		"esta_trabalhando": true,
		"detalhes_profissao": {
			"profissao": "Estágiário",
			"empresa": "Círculo Militar de São Paulo"
		},
		"hobbies": [
			"programar",
			"jogar tênis",
			"ler"
		]
	},
	{
		"nome": "Fulano",
		"idade": 25,
		"esta_trabalhando": false,
		"detalhes_profissao": {
			"profissao": null,
			"empresa": null
		},
		"hobbies": [
			"jogar tênis",
			"academia"
		]
	},
]

// Converter objeto para JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)
