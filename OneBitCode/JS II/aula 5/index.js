function addInput() {
	const ul = document.getElementById('inputs')

	const newLi = document.createElement('li')
	newLi.className = 'list-item'
	newLi.innerText = 'Novo input'
	// newLi.innerHTML = '<span>item 1</span>' // extremamente perigoso

	const newInput = document.createElement('input')
	newInput.type = 'text'
	newInput.name = 'input1'

	newLi.appendChild(newInput)
	ul.appendChild(newLi)
}
