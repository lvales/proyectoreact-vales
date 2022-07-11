import { Link } from "react-router-dom";

const formatNumber = (number) => {
   return (
      new Intl.NumberFormat().format(Math.round(number))
   )
}

const item = ({ item }) => {
   return (
      <div className="px-4 border rounded-lg shadow-sm">
         <div className="md:flex md:columns-2 group items-center">
            <div className="w-40 aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 mx-auto">
               <img
                  src={item.thumbnail}
                  alt='Imagen'
                  className="w-full h-full object-center object-cover "
               />
            </div>

            <div className="flex flex-col md:w-3/4 px-10 py-4 align-bottom">
               <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>

               <div className="mt-4">
                  <div className="md:flex md:items-end md:gap-3 md:justify-around">
                     {(item.original_price) ?
                        <p className="line-through text-gray-400">$ {formatNumber(item.original_price)}</p> :
                        <p className=""></p>}
                        <p className="text-sm text-slate-700 text-center">Stock disponible: {item.available_quantity}</p>
                  </div>
                  <div className="md:flex md:mt-2 md:items-end md:gap-3 md:justify-around">
                     <p className="text-xl text-gray-900">$ {formatNumber(item.price)}</p>
                     <p className="font-medium text-green-600">en {item.installments.quantity} x ${formatNumber(item.installments.amount)} sin interés</p>
                  </div>
               </div>

               <Link to={"item/" + item.id} className="mt-5 px-3 py-2 border border-yellow-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-yellow-400 hover:bg-stone-300 hover:border-stone-300 text-center">
                  Ver Detalle
               </Link>
            </div>
         </div>
      </div>
   )
}

export default item