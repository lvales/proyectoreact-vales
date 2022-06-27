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
		<div className="bg-slate-100 w-1/6 rounded-lg">
			<div className="p-5">
				<p className="text-lg font-medium">Bicicleta Olmo</p>
				<p className="text-sm">Stock: {stock}</p>
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
				<div className="flex flex-row justify-between">
					<button className="py-2 px-4 bg-red-500 rounded-bl-xl text-slate-50 font-medium"
						onClick={onAdd}>
						Agregar al carrito
					</button>
					<button className="py-2 px-4 bg-slate-500 rounded-br-xl text-slate-50 font-medium">
						Ver carrito
					</button>
				</div>
			</div>
		</div>
	)
}

export default ItemCount;