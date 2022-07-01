
const formatNumber = (number) => {
   return (
      new Intl.NumberFormat().format(Math.round(number))
   )
}

const item = ({ producto }) => {
   console.log(producto);
   return (
      <div className="px-4 border rounded-lg shadow-sm">
         <a href={producto.permalink} className="flex columns-2 group items-center">
            <div className="w-40 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
               <img
                  src={producto.thumbnail}
                  alt='Imagen'
                  className="w-full h-full object-center object-cover "
               />
            </div>
            <div className="flex w-3/4 flex-col px-10 py-4">
               <h3 className="mt-4 text-sm text-gray-700">{producto.title}</h3>
               <p className="mt-3 line-through text-gray-400 text-right">$ { formatNumber(producto.price * 1.2) }</p>
               <p className="mt-1 text-2xl text-gray-900  text-right">$ {formatNumber(producto.price)}</p>
               <button className="mt-5 px-3 py-2 border border-yellow-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-yellow-400 hover:bg-stone-300 hover:border-stone-300">
                  Detalle
               </button>
            </div>
         </a>
      </div>
   )
}

export default item