const CarDetails = ({ car }) => {

	return (
		<div>
			<h4>MARCA: {car.brand}</h4>
			<h4>ANO: {car.year}</h4>
			<h4>COR: {car.color}</h4>
		</div>
	)
}

export default CarDetails
