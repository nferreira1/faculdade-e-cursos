const data = [
	{ name: 'Nathan', age: 22, sallary: 2500, diverLicense: true },
	{ name: 'João', age: 18, sallary: 1500, diverLicense: false },
	{ name: 'Maria', age: 31, sallary: 4000, diverLicense: true },
	{ name: 'Pedro', age: 50, sallary: 7200, diverLicense: true },
	{ name: 'Vitória', age: 19, sallary: 0, diverLicense: false },
]


// 1 - Reverse
const reverseData = data.reverse()
console.log(reverseData)

// data = [
// 	{ name: 'Vitória', age: 19, sallary: 0, diverLicense: false },
// 	{ name: 'Pedro', age: 50, sallary: 7200, diverLicense: true },
// 	{ name: 'Maria', age: 31, sallary: 4000, diverLicense: true },
// 	{ name: 'João', age: 18, sallary: 1500, diverLicense: false },
// 	{ name: 'Nathan', age: 22, sallary: 2500, diverLicense: true },
// ]



// 2 - Find
const highSallary = 5000
const highestSallary = data.find(user => user.sallary > highSallary)
console.log(highestSallary)

// { name: 'Pedro', age: 50, sallary: 7200, diverLicense: true }



// 3 - FindIndex
const lowestSallary = data.findIndex(user => user.sallary > 0 && user.sallary < 2000)
data[lowestSallary].sallary += 200
console.log(data)

// { name: 'João', age: 18, sallary: 1500, diverLicense: false } => { name: 'João', age: 18, sallary: 1700, diverLicense: false }



// 4 - Includes
const numbers = [1, 2, 3, 4, 5]
const hasFour = numbers.includes(4)
console.log(hasFour)
console.log(numbers.includes(100))

// true
// false



// 5 - Map
data.map(user => user.newsletter = false)
console.log(data)

// data = [
// 	{ name: 'Vitória', age: 19, sallary: 0, diverLicense: false, newsletter: false },
// 	{ name: 'Pedro', age: 50, sallary: 7200, diverLicense: true, newsletter: false },
// 	{ name: 'Maria', age: 31, sallary: 4000, diverLicense: true, newsletter: false },
// 	{ name: 'João', age: 18, sallary: 1500, diverLicense: false, newsletter: false },
// 	{ name: 'Nathan', age: 22, sallary: 2500, diverLicense: true, newsletter: false },
// ]



// 6 - Filter
const drivers = data.filter(user => user.diverLicense)
console.log(drivers)

// drivers = [
// 	{ name: 'Pedro', age: 50, sallary: 7200, diverLicense: true, newsletter: false },
// 	{ name: 'Maria', age: 31, sallary: 4000, diverLicense: true, newsletter: false },
// 	{ name: 'Nathan', age: 22, sallary: 2500, diverLicense: true, newsletter: false },
// ]



// 7 - Reduce
const totalSallary = data.reduce((total, user) => total + user.sallary, 0)
console.log(totalSallary)

// 15400



// 8 - ForEach
const showUsersNames = data.forEach(user => console.log(`Olá, ${user.name}!`))



// 9 - Some
let someoneWithNewsletter = data.some(user => user.newsletter)
console.log(someoneWithNewsletter)

// false



data[0].newsletter = true
someoneWithNewsletter = data.some(user => user.newsletter)
console.log(someoneWithNewsletter)

// true



// 10 - Every
const everyUserHasName = data.every(user => user.name)
console.log(everyUserHasName)

// true
