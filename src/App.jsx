import './App.css';
import  ItemListContainer  from './components/ItemsListContainer/ItemListContainer';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Welcome to Rosario Store'/>} />
              <Route path='/category/:category' element={<ItemListContainer greeting='Welcome to Rosario Store'/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
