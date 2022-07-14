import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
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
				<Route path='/' element={<ItemListContainer mensage='Productos destacados Sunride'/>} />
				<Route path='/categories/:categoryName' element={<ItemListContainer mensage='Productos destacados Sunride'/>} />
				<Route path='/item/:itemId' element={<ItemDetailContainer />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
