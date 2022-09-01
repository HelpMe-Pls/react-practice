import { useRef, useEffect } from 'react'

export default function FocusInput() {
	const focused = useRef()

	useEffect(() => {
		focused.current.focus()
	}, [])

	return (
		<div>
			<label htmlFor="focused-input">Focus me on page load!</label>
			<input name="focused-input" ref={focused}></input>
		</div>
	)
}
