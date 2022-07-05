import { useState } from "react";

const ItemCount = ({ stock, initial }) => {

	const [amount, setAmount] = useState(initial);

	const add = () => {
		if (amount < stock) {
			setAmount(amount + 1);
		}
	}

	const rest = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	}

	const onAdd = () => alert('Producto agregado al carrito')

	return (
		<>
			<div className="p-1">
				<p>Cantidad:</p>
				<div className="flex px-3 my-3 p-1 justify-between items-center border rounded-md bg-white">
					<div>
						<button className="text-2xl font-semibold text-sky-600"
							onClick={rest}>
							-
						</button>
					</div>
					<div>
						<p>{amount}</p>
					</div>
					<div>
						<button className="text-2xl font-semibold text-sky-600"
							onClick={add}>
							+
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<button className="bg-blue-600 text-white text-xl p-3 rounded-lg hover:bg-blue-500">
						Comprar ahora
					</button>
					<button className="bg-blue-300 text-white text-xl p-3 rounded-lg hover:bg-blue-200"
						onClick={onAdd}>
						Agregar al carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount;