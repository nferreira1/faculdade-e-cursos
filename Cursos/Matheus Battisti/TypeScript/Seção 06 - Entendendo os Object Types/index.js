"use strict";
// 01 - Interface como parâmetro
function mostrarDetalhesProdutos(produto) {
    return `O nome do produto é ${produto.nome}, o preço é ${produto.preco} e está ${produto.disponivel ? 'disponível' : 'indisponível'}`;
}
const camiseta = {
    nome: 'Camiseta',
    preco: 49.9,
    disponivel: true
};
// console.log(mostrarDetalhesProdutos({ nome: 'Notebook', preco: 2000, disponivel: true }))
// console.log(mostrarDetalhesProdutos(camiseta))
// 02 - Interface como parâmetro opcional
function mostrarDetalhesUsuario(usuerio) {
    if (usuerio.role) {
        return `O nome do usuário é ${usuerio.nome} e o cargo é ${usuerio.role}`;
    }
    return `O nome do usuário é ${usuerio.nome} e o cargo não foi informado`;
}
const u1 = {
    nome: 'Nathan',
    role: 'gerente'
};
const u2 = {
    nome: 'Nathan',
};
// console.log(mostrarDetalhesUsuario(u1))
// console.log(mostrarDetalhesUsuario(u2))
// 03 - Propriedades readonly
const fusca = {
    marca: 'Volkswagen',
    rodas: 4
};
// fusca.rodas = 5
// console.log(fusca)
// 04 - Index Signature
let coord = {
    x: 10
};
// 05 - Herança de interfaces
const nathan = {
    nome: 'Nathan',
    idade: 22
};
const goku = {
    nome: 'Goku',
    idade: 40,
    superPoderes: ['Super força', 'Super velocidade', 'Kamehameha']
};
// console.log(nathan)
// console.log(goku)
// 06 - Intersection types
const arnoldSchwarzenegger = {
    nome: 'Arnold Schwarzenegger',
    tipo: 'Escopeta',
    calibre: 12
};
// console.log(arnoldSchwarzenegger)
// 07 - Readonly array
let arr = ['Maçã', 'Banana', 'Laranja'];
// arr[3] = 'Pera'
arr.forEach((fruta) => {
    // console.log(fruta.toUpperCase())
});
arr = arr.map((fruta) => {
    return fruta.toUpperCase();
});
// console.log(arr)
// 08 - Tuplas
const numeros = [1, 2, 3, 4, 5];
const pessoa = ['Nathan', 22];
// console.log(pessoa)
// 09 - Tuplas com readonly
function mostrarNumeros(numeros) {
    // numbers[0] = 10
    console.log(numeros[0]);
    console.log(numeros[1]);
}
mostrarNumeros([1, 2]);
