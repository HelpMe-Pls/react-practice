import { useReducer } from 'react'

function reducer(state, action) {
	switch (action.type) {
		case 'NUM_1':
			return { ...state, op1: action.number }
		case 'NUM_2':
			return { ...state, op2: action.number }
		case 'ADD':
			return { ...state, res: state.op1 + state.op2 }
		case 'SUBTRACT':
			return { ...state, res: state.op1 - state.op2 }
		default:
			return initialState
	}
}

const initialState = {
	op1: 0,
	op2: 0,
	res: 0,
}

export default function SimpleCalculator() {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	const [result, dispatchAction] = useReducer(reducer, initialState)

	return (
		<div>
			<div>
				<h2>Number 1</h2>
				{numbers.map((number) => (
					<button
						key={number}
						onClick={() =>
							dispatchAction({ type: 'NUM_1', number })
						}
					>
						{number}
					</button>
				))}
			</div>
			<div>
				<h2>Number 2</h2>
				{numbers.map((number) => (
					<button
						key={number}
						onClick={() =>
							dispatchAction({ type: 'NUM_2', number })
						}
					>
						{number}
					</button>
				))}
			</div>
			<div>
				<h2>Actions</h2>
				<button onClick={() => dispatchAction({ type: 'ADD' })}>
					+
				</button>
				<button onClick={() => dispatchAction({ type: 'SUBTRACT' })}>
					-
				</button>
				<button onClick={() => dispatchAction({ type: 'whatever' })}>
					c
				</button>
			</div>
			<div>
				<h2>Result: {result.res}</h2>
			</div>
		</div>
	)
}
