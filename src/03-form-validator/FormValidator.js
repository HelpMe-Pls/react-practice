import { useState } from 'react'

export default function FormValidator() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [submitted, setSubmitted] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (
			email.length == 0 ||
			password.length == 0 ||
			passwordConfirm.length == 0
		)
			setSubmitted('Fucking Idiot !')
		else if (
			!email.includes('@') ||
			password.trim().length < 8 ||
			password.trim() != passwordConfirm.trim()
		)
			setSubmitted('Fucking Idiot !')
		else setSubmitted('It is what it is.')
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Sign Up!</h2>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<label htmlFor="password-confirm">Confirm Password </label>
			<input
				type="password"
				name="password-confirm"
				onChange={(e) => setPasswordConfirm(e.target.value)}
			/>
			{submitted}
			<input type="submit" value="Submit" />
		</form>
	)
}
