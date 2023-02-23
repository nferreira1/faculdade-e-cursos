const number = parseFloat(prompt("Enter a number you want to know the table up to 20:"));

for (let i = 1; i <= 20; i++) {
	console.log(number + " x " + i + " = " + number * i);
}
