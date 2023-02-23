let options;
let balance = parseFloat(prompt("How much money is available?"));

do {
	options = prompt("The amount available is: US$ " + balance +
		"\nType 1 if you want to deposit some amount of money." +
		"\nType 2 if you want to withdraw some amount and money." +
		"\nType 3 if you want to terminate.");
	if (options === "1") {
		options = parseFloat(prompt("How much money do you want to deposit?"));
		balance += options;
	} else if (options === "2") {
		options = parseFloat(prompt("What amount do you want to withdraw?"));
		balance -= options;
	} else if (options > 3 || options < 1) {
		alert("The option you chose is invalid!");
	}
} while (options !== "3");
