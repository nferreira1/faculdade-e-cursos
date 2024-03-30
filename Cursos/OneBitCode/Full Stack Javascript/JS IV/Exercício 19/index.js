const Author = require('./Author')

const john = new Author('John Doe')

const post = john.writePost('Título do post', 'lorem ipsum dolor sit amet...')

post.addComment('Nathan Ferreira', 'Muito bom!')
post.addComment('Lucas', 'Achei legal!')

console.log(john)
console.log(post)
