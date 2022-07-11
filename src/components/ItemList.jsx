import Item from "./Item";

const itemList = ({ items }) => {

   return (
      <div className="grid grid-cols-1 gap-y-20 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-20">
         {items.results.slice(0, 6).map((item, index) => {
            return <Item item={item} key={index} />
         })
         }
      </div>
   )
}

export default itemList