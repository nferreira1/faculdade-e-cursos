class User {
	constructor(fullName, email, password) {
		this.fullName = fullName
		this.email = email
		this.password = password
	}

	login(email, password) {
		if (this.email === email && this.password === password) {
			return console.log('Login successful')
		} else {
			return console.error('Login failed')
		}
	}
}

const nathan = new User('Nathan Ferreira', 'nathan.1402@hotmail.com', '123')
nathan.login('nathan.1402@hotmail.com', '123')
