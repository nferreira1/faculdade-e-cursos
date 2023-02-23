let m = parseFloat(prompt("Enter the value in meters: "));
const converter = prompt("Enter a unit of measurement you want to convert to: \nmm\ncm\ndm\ndam\nhm\nkm");

switch (converter) {
	case "mm":
		m = m * 1000;
		break;
	case "cm":
		m = m * 100;
		break;
	case "dm":
		m = m * 10;
		break;
	case "dam":
		m = m * 0.1;
		break;
	case "hm":
		m = m * 0.01;
		break;
	case "km":
		m = m * 0.001;
		break;
	default:
		alert("Invalid unit of measurement!");
}

if (converter === "mm" || converter === "cm" || converter === "dm" || converter === "dam" || converter === "hm" || converter === "km") {
	alert("Your result in " + converter + " is: " + m);
}
