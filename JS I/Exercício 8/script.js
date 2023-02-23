const properties = [];
let options;

do {
	options = prompt(
		"Welcome to Property Registry!\n" +
		"Registered properties: " + properties.length +
		"\n\nChoose an option below:" +
		"\n1 - Register property" +
		"\n2 - Show all saved properties" +
		"\n3 - Exit"
	);

	switch (options) {
		case "1":
			const propertie = {};
			propertie.ownerName = prompt("Enter the name of the property owner: ");
			propertie.rooms = prompt("Enter the number of rooms in the property: ");
			propertie.bathrooms = prompt("Enter the number of bathrooms in the property: ");

			do {
				propertie.garage = prompt("Is there a garage on the property? (yes/no)");
				if (propertie.garage !== "yes" && propertie.garage !== "no") {
					alert("You entered an invalid option, please try again!");
				}
			} while (propertie.garage !== "yes" && propertie.garage !== "no")

			// if (propertie.garage === "yes") {
			// 	propertie.garage = true
			// } else if (propertie.garage === "no") {
			// 	propertie.garage = false;
			// }

			const confirmation = confirm(
				"Save this property?\n" +
				"\nOwner: " + propertie.ownerName +
				"\nRooms: " + propertie.rooms +
				"\nBathrooms: " + propertie.bathrooms +
				"\nGarage: " + propertie.garage
			);

			if (confirmation === true) {
				properties.push(propertie);
			}

			console.log(propertie);
			break
		case "2":
			a
			break
		case "3":
			alert("Shutting down...");
			break
		default:
			alert("You entered an invalid option, please try again!");
	}

} while (options !== "3")
