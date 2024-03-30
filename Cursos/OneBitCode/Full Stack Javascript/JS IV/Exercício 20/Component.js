class Component {
	#element = null

	constructor(tag, parent, options) {
		this.tag = tag
		this.parent = parent
		this.options = options
		this.build()
	}

	build() {
		this.#element = document.createElement(this.tag)
		Object.assign(this.#element)
	}
}

export default Component
