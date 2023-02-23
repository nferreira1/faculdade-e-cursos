const turist = prompt("Enter your name: ");
let cities = "";
let cont = 0;
let cityVisited = prompt("Have you ever visited any cities? (yes/no)");

while (cityVisited === "yes") {
	let city = prompt("Enter the name of the city you have already visited: ");

	cities += "- " + city + "\n";
	cont++;
	cityVisited = prompt("Have you ever visited any cities? (yes/no)");
}

alert(
	"Name of turist: " + turist +
	"\nNumber of cities visited: " + cont +
	"\nCities visited: \n" + cities
);
