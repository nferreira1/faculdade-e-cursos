import React from 'react'
import GrayImg from '../../shared/gray-img'

function Planet(props) {
	return (
		<div>
			<h4>
				{props.title}
			</h4>
			<p>{props.description}</p>
			<GrayImg imgUrl={props.imgUrl} />
		</div>
	)
}

export default Planet
