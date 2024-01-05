// 04 - Type parameters

function pegarAlgumaChave<T, K extends keyof T>(obj: T, key: K) {
	return `A chave ${key as string} está presente no objeto e tem o valor de ${obj[key]}`
}

const servidor = {
	hd: '2TB',
	ram: '32GB'
}

// console.log(pegarAlgumaChave(servidor, 'hd'))
