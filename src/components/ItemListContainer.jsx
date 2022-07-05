import ItemList from "./ItemList";
import { useEffect, useState } from "react"
import RiseLoader from "react-spinners/RiseLoader";


const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' size={40}  />
		</div>
	)
}

const ItemListContainer = ({ mensage }) => {

	const [items, setItems] = useState();

	const fetchApi = () => {
		fetch('https://api.mercadolibre.com/sites/MLA/search?q=bicicleta')
			.then(res => res.json())
			.then(json => {
				setItems(json);})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			<p className="text-3xl text-center mt-10 font-semibold">{mensage}</p>
			<div className="max-w-2xl mx-auto px-4 my-20 sm:px-6 lg:max-w-7xl lg:px-8">
				{!items ? spinner() :
					<ItemList items={items} />
				}
			</div>
		</>
	)
}

export default ItemListContainer;