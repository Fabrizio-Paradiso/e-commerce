import './App.css';
import  ItemListContainer  from './components/ItemsListContainer/ItemListContainer';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Rosario Store'/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a Rosario Store'/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          {/* <Route path="/*" element={<Navigate to='/' replace />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
