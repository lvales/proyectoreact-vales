import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const spinner = () => {
	return (
		<div className="mt-40 text-center">
			<RiseLoader color='#FBCB14' size={40} />
		</div>
	)
}


const ItemDetailContainer = () => {

	const { itemId } = useParams();
	const [item, setItem] = useState();

	const itemsCollection = collection(db, 'items')
	const qry = query(itemsCollection, where('id', '==', itemId));

	useEffect(() => {
		getDocs(qry)
			.then(result => {
				const list = result.docs.map(doc => {
					return {
						...doc.data()
					}
				})
				setItem(list);
			});
	}, [itemId]);

	return (
		<>
			<div className="max-w-2xl my-10 mx-auto px-4 pt sm:px-6 lg:max-w-7xl lg:px-8">
				{!item ? spinner() :
					<ItemDetail item={item} />
				}
			</div>
		</>
	)
}

export default ItemDetailContainer