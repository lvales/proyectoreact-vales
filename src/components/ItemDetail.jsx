
import { BsTruck } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import ItemCount from './ItemCount';


const formatNumber = (number) => {
	return (
		new Intl.NumberFormat().format(Math.round(number))
	)
}

const ItemDetail = ({ item }) => {
	return (
		<div className="flex flex-wrap border rounded-lg shadow-lg p-10 lg:justify-between gap-8">
			<div className="mx-auto">
				<img src={item.pictures[1].url} alt="Imagen" className="w-full" />
				<hr className="mt-10" />
				<p className="my-5 text-2xl">Características del producto</p>
				<div className="flex gap-4">
					<div className="w-1/2">
						{item.attributes.slice(0, 5).map((attribute, index) => {
							return (
								<div className="border rounded-lg mb-3" key={index}>
									<p className="text-sm p-1 pl-3 bg-slate-200 rounded-t-md">{attribute.name}</p>
									<p className="text-sm pl-4 my-3">{attribute.value_name}</p>
								</div>
							)
						})
						}
					</div>
					<div className="w-1/2">
						{item.attributes.slice(6, 11).map((attribute, index) => {
							return (
								<div className="border rounded-lg mb-3" key={index}>
									<p className="text-sm p-1 pl-3 bg-slate-200 rounded-t-md">{attribute.name}</p>
									<p className="text-sm pl-4 my-3">{attribute.value_name}</p>
								</div>
							)
						})
						}
					</div>
				</div>
			</div>

			<div className="w-1/3">
				<div className="border rounded-lg mt-10 lg:mt-0 ">
					<div className="p-5">
						<div className="flex">
							{(item.condition === 'new') ? <div className="text-left text-sm text-slate-500">Nuevo |</div> : <div className="text-left text-sm text-slate-500">Usado |</div>}
							<div className="text-left text-sm text-slate-500 ml-1">{item.sold_quantity} Vendidos</div>
						</div>
						<p className="text-left text-xl font-medium mt-2">{item.title}</p>
						<div className="text-left text-xl font-thin line-through text-slate-500 mt-3 ">$ {formatNumber(item.original_price)}</div>
						<div className="text-left text-4xl">$ {formatNumber(item.price)}</div>
						<div className="py-0.5 px-1 text-xs text-white font-medium bg-blue-500 rounded w-fit mt-3">OFERTA DEL DÍA</div>
						<div className="flex items-center mt-8">
							<div className="text-green-500 text-2xl"><BsTruck /></div>
							<div className="ml-2 text-green-500 font-medium text-base">Envio gratis</div>
						</div>
						<div className="flex items-center mt-3">
							<div className="text-green-500 text-2xl"><RiArrowGoBackFill /></div>
							<div className="ml-2 text-green-500 font-medium text-base">Devolución gratis</div>
						</div>
						<div className="ml-8 text-gray-500 text-xs">Tenés 30 días desde que lo recibís.</div>
						<p className="mt-5 font-medium">Stock disponible: {item.available_quantity}</p>
						<ItemCount stock={item.available_quantity} initial={1} />
					</div>
				</div>

				<div className="border rounded-lg mt-10 lg:mt-3">
						<div className="p-5">
							<p>Información sobre el vendedor</p>
							<div className="flex items-center mt-3">
								<div><GoLocation /></div>
								<div className="ml-2">Ubicación</div>
							</div>
								<div className="ml-6 text-sm text-slate-500">{item.seller_address.city.name} - {item.seller_address.state.name}</div>

						</div>
				</div>
			</div>
		</div>
	)
}

export default ItemDetail