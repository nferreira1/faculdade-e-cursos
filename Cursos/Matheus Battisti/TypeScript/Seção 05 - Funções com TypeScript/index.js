"use strict";
// 01 - Funções sem retorno
function semRetorno() {
    console.log('Função sem retorno!');
}
// semRetorno()
// 02 - Callback sem argumento
function saudacoes(nome) {
    return `Olá ${nome}!`;
}
function preSaudacoes(f, username) {
    console.log('Preparando a função!');
    const saudacao = f(username);
    console.log(saudacao);
}
// preSaudacoes(saudacoes, 'Nathan')
// 03 - Generic function
function primeiroElemento(arr) {
    return arr[0];
}
// console.log(primeiroElemento([1, 2, 3]))
// console.log(primeiroElemento<string>(['a', 'b', 'c']))
function juntarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const novoObjeto = juntarObjetos({ nome: 'Nathan' }, { idade: 22, profissao: 'Desenvolvedor' });
// console.log(novoObjeto)
// 04 - Constraint em Generic function
function maiorNumero(a, b) {
    let maior;
    if (+a > +b) {
        maior = a;
    }
    else {
        maior = b;
    }
    return maior;
}
// console.log(maiorNumero(1, 2))
// console.log(maiorNumero('2', '1'))
// 05 - Especificar tipo de argumento
function juntarArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
// console.log(juntarArrays<number | string>(['a', 'b'], [1, 2]))
// 06 - Argumentos opcionais
function saudacaoModerna(nome, saudacao) {
    if (saudacao) {
        return `Olá, ${saudacao} ${nome}!`;
    }
    return `Olá, ${nome}!`;
}
// console.log(saudacaoModerna('Nathan', 'Dr.'))
// console.log(saudacaoModerna('Nathan'))
// 07 - Parâmetro default
function soma(n, m = 10) {
    return n + m;
}
// console.log(soma(2, 4))
// console.log(soma(4))
// 08 - O tipo unknown
function fazerAlgo(x) {
}
