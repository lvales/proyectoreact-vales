import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { cartContext } from '../context/CartContext';

const CartWidget = () => {

	const { qtyProducts } = useContext(cartContext);

	return (
		<div className="flex">
			<div className="flex relative ml-5">
				<div className="text-slate-900 font-semibold hover:text-slate-400">
					<BsCart2 className='text-2xl' />
				</div>
					{(qtyProducts !== 0) ?
					<div className="absolute -top-2 -right-2 bg-red-500 rounded-full h-4 w-4 font-medium text-xs text-center text-slate-100"><p>{qtyProducts}</p></div>
					: null
				}
			</div>
		</div>
	)
}

export default CartWidget;
