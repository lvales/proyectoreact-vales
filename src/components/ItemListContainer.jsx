import ItemCount from "./ItemCount";

const ItemListContainer = ({mensaje}) => {
  return (
    <>
      <p className="text-3xl text-center p-10 font-semibold">{mensaje}</p>
      <div className="flex justify-center">
        <ItemCount stock='5' initial='1' />
      </div>
    </>
  )
}

export default ItemListContainer;