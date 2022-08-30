import { useState } from 'react'

export default function DarkMode() {
	const [theme, setTheme] = useState('page')

	return (
		<div className={theme}>
			<button
				className="dark-mode-button"
				onClick={(_e) => setTheme('page dark-mode')}
			>
				Dark Mode
			</button>
			<button
				className="light-mode-button"
				onClick={(_e) => setTheme('page')}
			>
				Light Mode
			</button>
		</div>
	)
}
