function show() {
	const contactList = document.getElementById('contactList')
	console.log(contactList)

	const listElements = document.getElementsByTagName('li')
	console.log(listElements)

	const contactsInputs = document.getElementsByClassName('contact-input')
	console.log(contactsInputs)

	const contacts = document.querySelectorAll('#contact-list > li > label')
	console.log(contacts)

	const contact1 = document.getElementsByName('contact1')
	console.log(contact1)

	const firstContact = document.querySelector('#contact-list > li > label')
	console.log(firstContact)
}

