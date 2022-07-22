import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import { BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";


const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));


const Cart = () => {

	const { products, removeItem, total } = useContext(cartContext);

	const clickRemove = (id) => {
		removeItem(id)
	};

	return (
		<>
			<div className="container mx-auto px-28 mb-20">
				<div className="text-2xl mt-10 text-center">Carrito de compras</div>
				{(products.length === 0) ?
					<>
						<div className="text-2xl mt-10 text-center">Ups... el carrito esta vacio, vuelve pronto</div>
						<div className=" mt-10 text-center"><Link className="text-xl" to="/">Volver</Link></div>
					</>
					:
					products.map(product =>
						<div key={product.id} className="flex border-b  mb-3 items-center justify-between gap-5">
							<Link to={`/item/${product.id}`}><img className="w-20" src={product.thumbnail} alt="image_thumbnail" /></Link>
							<Link to={`/item/${product.id}`} className="w-3/5 ml-3 text-md">{product.title}</Link>
							<div className="w-1/5 ml-3 text-md text-center">Cantidad: {product.qty}</div>
							<button onClick={() => clickRemove(product.id)}><BsTrash className="text-2xl" /></button>
							<div className="w-1/5 ml-3 text-lg text-right font-medium">{"$ " + formatNumber(product.price * product.qty)}</div>
						</div>
					)
				}
				{((products.length !== 0)) ?
					<div className="text-right text-xl font-medium  mt-10">Total de la compra: $ {formatNumber(total)}</div>
					: null
				}
				<div className="text-right my-10 border-t">
					<button className="bg-blue-600 text-white text-base py-2 px-8 rounded-md hover:bg-blue-500 mt-10">Continuar compra</button>
				</div>
			</div>
		</>
	)
}

export default Cart