import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
	return (
		<>
			<NavBar name='Sunride' desc='BIKE SHOP' btn2='Crear cuenta' />
			<ItemListContainer mensaje='Bienvenido a Sunride' />
		</>
	);
}

export default App;
