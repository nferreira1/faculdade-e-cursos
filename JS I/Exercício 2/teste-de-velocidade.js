const nameOfVechile01 = prompt("Name of vechile 01:");
const speedOfVechile01 = parseFloat(prompt("Speed of vechile 01:"));

const nameOfVechile02 = prompt("Name of vechile 02:");
const speedOfVechile02 = parseFloat(prompt("Speed of vechile 02:"));

if (speedOfVechile01 > speedOfVechile02) {
	alert("The fastest vehicle is " + nameOfVechile01);
} else if (speedOfVechile01 < speedOfVechile02) {
	alert("The fastest vehicle is " + nameOfVechile02);
} else {
	alert("The speed of the two vehicles is the same!");
}
