import { useEffect } from 'react'

export default function WindowEvent() {
	function Yell() {
		alert('You fuckin moron!')
	}

	useEffect(() => {
		window.addEventListener('dblclick', Yell)

		// when the `windowEvent` state changes, this component rerenders, and this function kicks in BEFORE that rerender.
		return () => window.removeEventListener('dblclick', Yell)
	}, [])

	return <h2>Window event is active</h2>
}
