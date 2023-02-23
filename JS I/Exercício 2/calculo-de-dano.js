const nameOfCharacter01 = prompt("Enter the name of attacker: ");
const powerOfAttack = parseFloat(prompt("Enter the power of " + nameOfCharacter01 + ": "));

const nameOfCharacter02 = prompt("Enter the name of defender: ");
let pointsOfLife = parseFloat(prompt("Enter the points of life of " + nameOfCharacter02 + ":"));
const powerOfDefense = parseFloat(prompt("Enter the power of defense of " + nameOfCharacter02 + ":"));
const checkChild = prompt("Does " + nameOfCharacter02 + " have a shield? [y/n]");

let damageOnCharacter02 = 0;

if ((powerOfAttack > powerOfDefense) && (checkChild === "n")) {
	damageOnCharacter02 = powerOfAttack - powerOfDefense;
} else if ((powerOfAttack > powerOfDefense) && (checkChild === "y")) {
	damageOnCharacter02 = (powerOfAttack - powerOfDefense) / 2;
}

pointsOfLife -= damageOnCharacter02;

alert(
	"\nAmount of damage that character " + nameOfCharacter01 + " dealt to character " + nameOfCharacter02 + " is " + damageOnCharacter02
);

alert(
	"Character " + nameOfCharacter01 +
	"\nPower of Attack: " + powerOfAttack +
	"\n" +

	"\nCharacter " + nameOfCharacter02 +
	"\nPoints of life: " + pointsOfLife +
	"\nPoints of defense: " + powerOfDefense +
	"\nHave child: " + checkChild
);
