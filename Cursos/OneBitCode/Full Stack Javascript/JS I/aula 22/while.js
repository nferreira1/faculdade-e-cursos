const speed = 80;

while (speed > 0) {
	console.log("The speed of car is " + speed + " km/h");
	speed -= 20;
	alert("The speed is decreasing 20 km/h.");

	if (speed === 40) {
		break;
	}
}

alert("The car stop!");
