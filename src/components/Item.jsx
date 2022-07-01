
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
            <div className="flex w-3/4 flex-col p-10">
               <h3 className="mt-4 text-sm text-gray-700">{producto.title}</h3>
               <p className="mt-1 text-lg font-medium text-gray-900 text-right">$ {producto.price}</p>
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