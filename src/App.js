import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
	BrowserRouter,
	Routes,
	Route,
 } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar name='Sunride' desc='BIKE SHOP' />
			<ItemListContainer mensage='Productos destacados Sunride' />
			<ItemDetailContainer />
		</BrowserRouter>
	);
}

export default App;
