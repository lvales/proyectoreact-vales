import Item from "./Item";

const itemList = ({ productos }) => {

   return (
      <div className="grid grid-cols-1 gap-y-20 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-20">
         {productos.results.map((producto, index) => {
            console.log(producto);
            return <Item producto={producto} key={index} />
         })
         }
      </div>
   )
}

export default itemList