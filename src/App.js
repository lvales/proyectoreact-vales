import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {
	BrowserRouter,
	Routes,
	Route,
 } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar name='Sunride' desc='BIKE SHOP' />
			<Routes>
				<Route path='/' element={<ItemListContainer mensage='Productos destacados Sunride' />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/item/:itemId' element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
