import { useState, useEffect } from 'react'

export default function DogPics() {
	// API: https://dog.ceo/dog-api/
	const [dog, setDog] = useState('')

	async function getDog() {
		const response = await fetch('https://dog.ceo/api/breeds/image/random')
		const result = await response.json()
		setDog(result.message)
	}

	useEffect(() => getDog(), [])

	return (
		<div className="dog-pics">
			<img src={dog} alt="some random dog" />
			<button onClick={getDog}>🐶</button>
		</div>
	)
}
