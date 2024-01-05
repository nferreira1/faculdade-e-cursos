"use strict";
// 01 - Campos em classes
class Usuario {
}
const nathan = new Usuario();
// console.log(nathan)
// 02 - Constructor
class NovoUsuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const nathan2 = new NovoUsuario('Nathan', 22);
// console.log(nathan2)
// 03 - Propriedades readonly
class Carro {
    constructor(nome) {
        this.rodas = 4;
        this.nome = nome;
    }
}
const fusca = new Carro('Fusca');
// console.log(fusca)
// 04 - Herança e super
class Maquina {
    constructor(nome) {
        this.nome = nome;
    }
}
class MaquinaMatadora extends Maquina {
    constructor(nome, armas) {
        super(nome);
        this.armas = armas;
    }
}
const trator = new Maquina('Trator');
const destroyer = new MaquinaMatadora('Destroyer', 4);
// 05 - Metódos
class Anao {
    constructor(nome) {
        this.nome = nome;
    }
    saudacoes() {
        return `Olá, eu sou o ${this.nome}`;
    }
}
const jimmy = new Anao('Jimmy');
// console.log(jimmy.saudacoes())
// 06 - O this em classes
class Caminhao {
    constructor(modelo, hp) {
        this.modelo = modelo;
        this.hp = hp;
    }
    mostrarDetalhes() {
        return `Modelo: ${this.modelo} | HP: ${this.hp}`;
    }
}
const volvo = new Caminhao('FH 540', 540);
const scania = new Caminhao('R 440', 440);
// console.log(volvo.mostrarDetalhes())
// console.log(scania.mostrarDetalhes())
// 07 - Getters
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Nathan', 'Ferreira');
// console.log(pessoa)
// 08 - Setters
class Coordenada {
    set coordenadaX(x) {
        this.x = x;
    }
    set coordenadaY(y) {
        this.y = y;
    }
    get coordenadaCompleta() {
        return `X: ${this.x} | Y: ${this.y}`;
    }
}
const coordenada = new Coordenada();
coordenada.coordenadaX = 10;
coordenada.coordenadaY = 20;
// console.log(coordenada.coordenadaCompleta)
// 09 - Herdando interfaces
class BlogPost {
    constructor(titulo) {
        this.titulo = titulo;
    }
    itemTitulo() {
        return this.titulo;
    }
}
const post = new BlogPost('Aprendendo TypeScript');
// console.log(post.itemTitulo())
// 10 - Override de metódos
class Base {
    algumMetodo() {
        return 'Executando método da classe Base';
    }
}
class Nova extends Base {
    algumMetodo() {
        return 'Executando método da classe Nova';
    }
}
const meuObjeto = new Nova();
// console.log(meuObjeto.algumMetodo())
// 11 - Visibilidade public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstancia = new C();
// console.log(cInstancia.x)
// 12 - Visibilidade protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMetodo() {
        return this.x;
    }
}
class F extends E {
    mostrarX() {
        return this.x;
    }
    mostrarProtectedMetodo() {
        this.protectedMetodo();
    }
}
const fInstancia = new F();
// console.log(fInstancia.x) // Erro
// console.log(fInstancia.mostrarX()) // 10
// console.log(fInstancia.mostrarProtectedMetodo()) // 10
// 13 - Visibilidade private
class PrivateClass {
    constructor() {
        this.nome = 'Nathan';
    }
    get getNome() {
        return this.nome;
    }
    privateMetodo() {
        return this.nome;
    }
}
const pObj = new PrivateClass();
// console.log(pObj.nome) // Erro
// console.log(pObj.getNome)
// console.log(pObj.privateMetodo()) // Erro
// 14 - Static members
class StaticMembers {
    static staticMetodo() {
        return 'Este é um método estático';
    }
}
StaticMembers.prop = 'Teste static';
// console.log(StaticMembers.prop)
// console.log(StaticMembers.staticMetodo())
// 15 - Generic class
class Item {
    constructor(primeiro, segundo) {
        this.primeiro = primeiro;
        this.segundo = segundo;
    }
    get getPrimeiro() {
        return `O primeiro é ${this.primeiro}`;
    }
    get getSegundo() {
        return `O segundo é ${this.segundo}`;
    }
}
const item1 = new Item('Caixa', 'Surpresa');
// console.log(item1.getPrimeiro)
// 16 - Parameter properties
class ParameterProperties {
    constructor(nome, qtd, preco) {
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
    }
    get getQtd() {
        return `A quantidade em estoque é ${this.qtd}`;
    }
    get getPreco() {
        return `O preço é ${this.preco}`;
    }
}
const camiseta = new ParameterProperties('Camiseta', 20, 49.90);
console.log(camiseta);
// 17 - Class expressions
const minhaClasse = class {
    constructor(nome) {
        this.nome = nome;
        this.nome = nome;
    }
};
const p1 = new minhaClasse('Nathan');
console.log(p1);
// 18 - Abstract class
class AbstractClass {
}
class AbstractClass2 extends AbstractClass {
    constructor(nome) {
        super();
        this.nome = nome;
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
}
// 19 - Relação entre classes
class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
}
class Gato {
    constructor(nome) {
        this.nome = nome;
    }
}
const Loui = new Gato('Loui');
// console.log(Loui)
