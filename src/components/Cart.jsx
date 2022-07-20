import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import { BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";


const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));


const Cart = () => {

	const { products, removeItem } = useContext(cartContext);

	const addTotal = () => {
		let total = 0;
		products.forEach(product => {
			total += product.price * product.qty
		});
		return total;
	}

	const clickRemove = (id) => {
		removeItem(id)
	};

	return (
		<>
			<div className="text-2xl mt-10 text-center">Carrito de compras</div>
			<div className="container mx-auto mb-20 mt-10">
				{(products.length === 0) ?
					<>
						<div className="text-2xl mt-10 text-center">Ups... el carrito esta vacio, vuelve pronto</div>
						<div className=" mt-10 text-center"><Link className="text-xl" to="/">Volver</Link></div>
					</>
					:
					products.map(product =>
						<div key={product.id} className="flex border-b-2  mb-3 items-center justify-between px-20 gap-5">
							<Link to={`/item/${product.id}`}><img className="w-20" src={product.thumbnail} alt="image_thumbnail" /></Link>
							<Link to={`/item/${product.id}`} className="w-3/5 ml-3 text-md">{product.title}</Link>
							<div className="w-1/5 ml-3 text-md text-center">Cantidad: {product.qty}</div>
							<button onClick={() => clickRemove(product.id)}><BsTrash className="text-2xl" /></button>
							<div className="w-1/5 ml-3 text-lg text-right font-medium">{"$ " + formatNumber(product.price * product.qty)}</div>
						</div>
					)
				}
				{((products.length !== 0)) ?
					<div className="text-right text-xl font-medium px-20 mt-10">Total de la compra: $ {formatNumber(addTotal())}</div>
					: null
				}
			</div>
		</>
	)
}

export default Cart