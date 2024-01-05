"use strict";
// 01 - Revisão de Generics
function mostrarDados(arg) {
    return `O dado é ${arg}`;
}
// console.log(mostrarDados(5))
// console.log(mostrarDados('Mostrando Generic'))
// console.log(mostrarDados(true))
// console.log(mostrarDados([1, 2, 3, 4, 5]))
// 02 - Reduzindo tipos aceitos em Generics
function mostrarNomeProduto(obj) {
    return `O nome do produto é ${obj.nome}`;
}
const produto = {
    nome: 'Notebook',
    preco: 2000,
};
const produto2 = {
    nome: 'Monitor',
    preco: 400,
    desconto: .05,
};
// console.log(mostrarNomeProduto(produto))
// console.log(mostrarNomeProduto(produto2))
// 03 - Generics com interface
const carro = {
    nome: 'Civic',
    rodas: 4,
    motor: 1.8,
    cor: 'Preto',
};
const caneta = {
    nome: 'Bic',
    rodas: false,
    motor: false,
    cor: 'Azul'
};
// console.log(carro)
// console.log(caneta)
// 04 - Type parameters
function pegarAlgumaChave(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const servidor = {
    hd: '2TB',
    ram: '32GB'
};
// console.log(pegarAlgumaChave(servidor, 'hd'))
// 05 - Keyof type operator
function mostrarPersonagemNome(obj, nome) {
    return `${obj[nome]}`;
}
const personagem = {
    nome: 'Nathan',
    idade: 22,
    permissaoDirigir: true
};
// console.log(mostrarPersonagemNome(personagem, 'nome'))
// 06 - Typeof type operator
const username = 'Nathan';
const username2 = 'Vitória';
const username3 = 'Nathan';
// 07 - Indexed access types
const novoCaminhao = {
    km: 0,
    kg: 0,
    descricao: 'Caminhão novo'
};
function mostrarKm(km) {
    return `O veículo tem ${km} km rodados`;
}
const novoCarro = {
    km: 1000,
    kg: 500
};
// console.log(mostrarKm(novoCarro.km))
// console.log(mostrarKm(novoCaminhao.km))
// 08 - Conditional types
const algumValor = 10;
// 09 - Template literals type
const teste = 'Algum teste';
