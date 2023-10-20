/* eslint-disable no-undef */
// import dotenv from 'dotenv';
// dotenv.config();

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDmNfvQZYsF0Z0EaVYHNFI-Ev9sOsXmZYg',
	authDomain: 'miniblog-36b0d.firebaseapp.com',
	projectId: 'miniblog-36b0d',
	storageBucket: 'miniblog-36b0d.appspot.com',
	messagingSenderId: '30720643539',
	appId: '1:30720643539:web:fb7b75e1651349a8db1f26'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
