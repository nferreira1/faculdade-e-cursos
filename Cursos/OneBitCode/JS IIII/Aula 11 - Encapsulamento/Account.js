class Account {
	#password
	#balance = 0

	constructor(user) {
		this.email = user.email
		this.#password = user.password
		// this.#balance = 0
	}

	getBalance(email, password) {
		if (this.#authenticate(email, password)) {
			return this.#balance
		} else {
			return null
		}
	}

	#authenticate(email, password) {
		return this.email === email && this.password === password
	}
}

const user = {
	email: 'nathan.1402@hotmail.com',
	password: '123456'
}

const myAccount = new Account(user)

console.log(myAccount.getBalance('nathan.1402@hotmail.com', '123456'))
