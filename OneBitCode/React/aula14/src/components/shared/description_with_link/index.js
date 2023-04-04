import React, { Fragment } from "react"

function DescriptionWithLink(props) {
	return (
		<Fragment>
			<p>{props.description}</p>
			<a href={props.link}>{props.link}</a>
		</Fragment>
	)
}

export default DescriptionWithLink
