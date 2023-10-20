const person = {
	name: 'Luke',
	job: 'Farmer',
	parents: ['Anakin', 'Padme']
}

// const name = person.name

const { name, job, parents } = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father, mother)






function createUser({ name, job, parents }) {
	// floor serve para pegar somente o número inteiro
	const id = Math.floor(Math.random() * 9999)
	return {
		id,
		name,
		job,
		parents
	}
}

// ou

function createUser(person) {
	// floor serve para pegar somente o número inteiro
	const id = Math.floor(Math.random() * 9999)
	return {
		id,
		name: person.name,
		job: person.job,
		parents: person.parents
	}
}

const luke = createUser(person)

console.log(luke)
