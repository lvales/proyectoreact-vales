
import { BsCart2 } from 'react-icons/bs';

const CartWidget = ({ cantCart }) => {
	return (
		<div className="flex">
			<div className="flex relative ml-5">
				<button className="text-slate-900 font-semibold hover:text-slate-400" href="#">
					<BsCart2 className='text-2xl' />
				</button>
				<div className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1 font-medium text-xs text-slate-100"><p>{cantCart}</p></div>
			</div>
			<div className="ml-4">$ 0,00</div>
		</div>
	)
}

export default CartWidget;