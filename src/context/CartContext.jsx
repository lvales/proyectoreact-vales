import { useState } from 'react';
import {createContext} from 'react'

export const cartContext = createContext();
const {Provider} = cartContext;

const CartProvider = ({ children }) => {

   const[products, setProducts] = useState([]);

   const getQtyProducts = () => {
      // TODO
   }

   const addItem = (item) => {
      if (isinProducts(item.id)){
         const found = products.find(e => e.id === item.id)
         const index = products.indexOf(found);
         const aux = [...products];
         aux[index].qty += item.qty;
         setProducts(aux);
      }else{
         setProducts ([...products, item])
      }

   }

   const removeItem = (id) => {
      setProducts(products.filter(e => e.id !== id))
   }

   const clearItem  = (item) => {
      setProducts([]);
   }

   const isinProducts = (id) => {
      return products.some(e => e.id === id);
   }

  return (
    <Provider value={{addItem, removeItem, clearItem}}>
      { children }
    </Provider>
  )
}

export default CartProvider