import './App.css';
import Barra from './components/Barra';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Barra/>
     <ItemListContainer greeting='Bienvenidos a Mercedez-Benz'/>
     <ItemList/>
    </div>
  );
}

export default App;
