const CarDetails = ({ brand, km, color, newCar }) => {
	return (
		<div>
			<h2>Detalhes do carro</h2>
			<ul>
				<li>MARCA: {brand.toUpperCase()}</li>
				<li>KM: {km}</li>
				<li>COR: {color.toUpperCase()}</li>
				{newCar && <li>Este carro é novo</li>}
			</ul>
		</div>
	)
}

export default CarDetails
