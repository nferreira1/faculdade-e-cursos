import GrayImg from '../../shared/img'
import DescriptionWithLink from '../../shared/description_with_link'

function Planet(props) {
	return (
		<div>
			<h4>{props.name}</h4>

			<DescriptionWithLink
				description={props.description}
				imgUrl={props.imgUrl}
				link={props.link}
			/>

			<p>
				<GrayImg
					imgUrl={props.imgUrl}
				/>
			</p>

		</div>
	)
}

export default Planet
