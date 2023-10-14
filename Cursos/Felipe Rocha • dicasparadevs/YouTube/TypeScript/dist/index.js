"use strict";
// Tipos básicos
let age = 5;
const firstName = 'Nathan';
const isValid = true;
let idk = 5;
idk = '12';
const ids = [1, 2, 3, 4, 5];
const names = ['Nathan', 'John', 'Mary'];
const booleans = [true, false, true];
// Tupla
const person = [0, 'Nathan'];
// Lista de tuplas
const people = [
    [0, 'Nathan'],
    [1, 'Mary'],
    [2, 'John'],
];
// Intersections
const productId = 5;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
