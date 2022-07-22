import ItemList from "./ItemList";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' size={40} />
		</div>
	)
}

const ItemListContainer = ({ mensage }) => {

	const { categoryName } = useParams();
	const [items, setItems] = useState();

	const itemsCollection = collection(db, 'items')
	const qry = (categoryName) ? query(itemsCollection, where('category_id', '==', categoryName)) : collection(db, 'items');
	
	useEffect(() => {
		getDocs(qry)
			.then(result => {
				const list = result.docs.map(doc => {
					return {
						...doc.data()
					}
				})
				setItems(list);
			});
	}, [categoryName]);

	return (
		<>
			<p className="text-3xl text-center my-10 font-semibold">{mensage}</p>
			<div className="max-w-2xl mx-auto px-4 my-20 sm:px-6 lg:max-w-7xl lg:px-8">
				{!items ? spinner() :
					<ItemList items={items} />
				}
			</div>
		</>
	)
}

export default ItemListContainer;