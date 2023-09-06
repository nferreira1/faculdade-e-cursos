const fs = require('fs') // File System

// Ler arquivo
fs.readFile('./index.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err)
		return
	}
	console.log(data)
})
