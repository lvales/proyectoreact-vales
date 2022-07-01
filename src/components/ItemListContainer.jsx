import ItemList from "./ItemList";
import { useEffect, useState } from "react"
import RiseLoader from "react-spinners/RiseLoader";


const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' />
		</div>
	)
}

// https://62be3b99be8ba3a10d4fc3ef.mockapi.io/api/v1/products

const ItemListContainer = ({ mensaje }) => {

	const [productos, setProductos] = useState();

	const fetchApi = () => {
		fetch('https://api.mercadolibre.com/sites/MLA/search?q=bicicleta')
			.then(res => res.json())
			.then(json => {
				setProductos(json);
			})
	}

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			<p className="text-3xl text-center mt-10 font-semibold">{mensaje}</p>
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				{!productos ? spinner() :
					<ItemList productos={productos} />
				}
			</div>
		</>
	)
}

export default ItemListContainer;