let options;

do {
	options = prompt(
		"Choose an option: " +
		"\n1 - transfers" +
		"\n2 - Pix" +
		"\n3 - Savings account" +
		"\n4 - Investment" +
		"\n5 - Exit"
	);
	alert("You selected the option " + options)
	if (options === "5") {
		alert("You chose to exit, the system is shutting down! Good Bye!");
		break
	} else if (options > 5 || options < 1) {
		alert("The option you chose is invalid!");
	}
} while (options !== "5");
