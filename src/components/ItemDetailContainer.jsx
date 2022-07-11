import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' size={40} />
		</div>
	)
}


const ItemDetailContainer = () => {

	const {itemId} = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
		const URL = `https://api.mercadolibre.com/items/${itemId}`;
		const fetchApi = () => {
			fetch(URL)
				.then(res => res.json())
				.then(json => { setItem(json) })
				.catch(err => console.log(err))
		}
		fetchApi();
	}, [itemId]);

	return (
		<>
			<div className="max-w-2xl my-10 mx-auto px-4 pt sm:px-6 lg:max-w-7xl lg:px-8">
				{!item ? spinner() :
					<ItemDetail item={item}/>
				}
			</div>
		</>
	)
}

export default ItemDetailContainer