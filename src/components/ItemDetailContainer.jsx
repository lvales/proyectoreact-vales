import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' size={40} />
		</div>
	)
}


const ItemDetailContainer = () => {

	const [item, setItem] = useState();

	const fetchApi = () => {
		fetch('https://api.mercadolibre.com/items/MLA1122975580')
			.then(res => res.json())
			.then(json => {
				setItem(json);})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			<div className="max-w-2xl mx-auto px-4 pt sm:px-6 lg:max-w-7xl lg:px-8">
				{!item ? spinner() :
					<ItemDetail item={item}/>
				}
			</div>
		</>
	)
}

export default ItemDetailContainer