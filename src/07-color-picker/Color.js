export default function Color({ hex, name, onActive }) {
	return (
		<button style={{ backgroundColor: hex }} onClick={onActive}>
			<h2>{name}</h2>
		</button>
	)
}
