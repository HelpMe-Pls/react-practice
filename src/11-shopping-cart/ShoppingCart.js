import { useState } from 'react'

const items = [
	{
		name: 'apple',
		price: 0.39,
	},
	{
		name: 'banana',
		price: 0.79,
	},
	{
		name: 'cherry tomatoes',
		price: 3.99,
	},
]

function ShoppingCart() {
	const [cart, setCart] = useState([])

	function addToCart(item) {
		const newCart = [...cart]
		const existingItem = newCart.find((eI) => eI.name === item.name)
		if (existingItem) {
			existingItem.qty += 1
			setCart(newCart)
		} else setCart((prevCart) => [...prevCart, { ...item, qty: 1 }])
	}

	function increase(item) {
		const newCart = [...cart]
		const increasingItem = newCart.find((iI) => iI.name === item.name)
		increasingItem.qty += 1
		setCart(newCart)
	}

	function decrease(item) {
		const newCart = [...cart]
		const decreasingItem = newCart.find((dI) => dI.name === item.name)
		decreasingItem.qty -= 1
		if (decreasingItem.qty <= 1) {
			newCart.splice(newCart.indexOf(decreasingItem), 1)
			setCart(newCart)
		} else setCart(newCart)
	}

	return (
		<div>
			<h1>Shopping Cart</h1>
			<div className="cart">
				<div className="items">
					<h2>Items</h2>
					{items.map((item) => (
						<div key={item.name}>
							<h3>{item.name}</h3>
							<p>${item.price}</p>
							<button onClick={() => addToCart(item)}>
								Add to Cart
							</button>
						</div>
					))}
				</div>
				<div>
					<h2>Cart</h2>
					{cart.map((item) => (
						<div key={item.name}>
							<h3>{item.name}</h3>
							<p>
								<button onClick={() => decrease(item)}>
									-
								</button>
								{item.qty}
								<button onClick={() => increase(item)}>
									+
								</button>
							</p>
							<p>
								Subtotal: ${+(item.qty * item.price).toFixed(2)}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="total">
				<h2>
					Total: $
					{cart
						.reduce(
							(total, item) => total + item.qty * item.price,
							0
						)
						.toFixed(2)}
				</h2>
			</div>
		</div>
	)
}

export default ShoppingCart
