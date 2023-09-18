// 1 - JSON.stringify
// Converte objeto JavaScript em JSON
const obj = { nome: "Nathan", idade: 22, profissao: "Desenvolvedor" }
const json = JSON.stringify(obj)
console.log(json)

// 2 - JSON.parse
// Converte JSON em objeto JavaScript
const json2 = '{ "nome": "Nathan", "idade": 22, "profissao": "Desenvolvedor" }'
const obj2 = JSON.parse(json2)
console.log(obj2)
