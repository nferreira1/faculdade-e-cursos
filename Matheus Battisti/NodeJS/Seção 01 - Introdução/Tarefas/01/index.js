const fs = require('fs')

const a = 5

const b = fs.readFile('./index.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err)
		return
	}

	console.log(parseInt(data) + a)
})
