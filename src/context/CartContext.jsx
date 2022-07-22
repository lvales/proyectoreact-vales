import { useEffect, useState } from 'react';
import { createContext } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

	const [products, setProducts] = useState([]);
	const [qtyProducts, setQtyProducts] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const getQtyProducts = () => {
			let qty = 0;
			products.forEach(product => {
				qty += product.qty
			});
			setQtyProducts(qty);
		}

		const addTotal = () => {
			let aux = 0;
			products.forEach(product => {
				aux += product.price * product.qty;
			});
			setTotal(aux);
		}
		getQtyProducts();
		addTotal();
	}, [products])


	const addItem = (item) => {
		if (isinProducts(item.id)) {
			const found = products.find(e => e.id === item.id)
			const index = products.indexOf(found);
			const aux = [...products];
			aux[index].qty += item.qty;
			setProducts(aux);
		} else {
			setProducts([...products, item]);
		}
	}

	const removeItem = (id) => {
		setProducts(products.filter(e => e.id !== id));
		console.log(products);
	}

	const clearItem = (item) => {
		setProducts([]);
		setQtyProducts(0);
	}

	const isinProducts = (id) => {
		return products.some(e => e.id === id);
	}

	return (
		<Provider value={{ products, addItem, removeItem, clearItem, qtyProducts, total }}>
			{children}
		</Provider>
	)
}

export default CartProvider
