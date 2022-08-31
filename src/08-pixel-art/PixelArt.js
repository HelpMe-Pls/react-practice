import React, { useState, createContext, useContext } from 'react'

const ColorContext = createContext({
	color: 'lightGrey',
	setColor: () => {
		/*placeHolder */
	},
})
ColorContext.displayName = 'ColorContext'

function ColorProvider({ children }) {
	const [color, setColor] = useState('lightGrey')
	return (
		<ColorContext.Provider value={[color, setColor]}>
			{children}
		</ColorContext.Provider>
	)
}

export function useColor() {
	const context = useContext(ColorContext)
	if (context === undefined) {
		throw new Error(`useColor must be used within a ColorProvider`)
	}
	return context
}

function ColorPicker() {
	const colors = [
		'red',
		'blue',
		'yellow',
		'green',
		'black',
		'cyan',
		'purple',
		'pink',
	]
	// Use array destructuring so it has to be in the same order as the original array
	// If we're using object destructuring then it's just `{setColor}`
	const [, setColor] = useColor()

	return (
		<>
			<div style={{ marginLeft: 48 }}>
				<h1>Choose a color</h1>
				{colors.map((square) => (
					<button
						key={square}
						style={{ backgroundColor: square }}
						onClick={(_e) => setColor(square)}
					/>
				))}
			</div>
		</>
	)
}

function Pixel() {
	const [backgroundColor, setBackgroundColor] = useState('lightGrey')
	const [color] = useColor()

	return (
		<button
			style={{
				height: '20px',
				width: '20px',
				backgroundColor: backgroundColor,
				margin: '1px',
			}}
			onClick={(_e) => setBackgroundColor(color)}
		/>
	)
}

function Grid() {
	const pixels = []

	for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(10, 1fr)',
				width: '210px',
				margin: '0 auto',
			}}
		>
			{pixels}
		</div>
	)
}

export default function PixelArt() {
	return (
		<ColorProvider>
			<ColorPicker />
			<Grid />
		</ColorProvider>
	)
}
