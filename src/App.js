import './App.css';
import Barra from './components/Barra';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Barra/>
     <ItemListContainer greeting='Bienvenidos a Mercedez-Benz'/>
    </div>
  );
}

export default App;
