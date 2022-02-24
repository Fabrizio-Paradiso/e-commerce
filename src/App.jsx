import './App.css';
import { ItemListContainer } from './components/ItemsListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Rosario Store'/>
    </div>
  );
}

export default App;
