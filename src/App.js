import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>

      <NavBar name='eCommerce' />

      <ItemListContainer mensaje='Bienvenido a eCommerce' />

    </div>
  );
}

export default App;
