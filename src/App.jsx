import './App.css';
import  ItemListContainer  from './components/ItemsListContainer/ItemListContainer';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartForm from './components/Cart/CartForm';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import CartContextProvider from './context/CartContext';
import {AuthProvider}from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/form' element={<CartForm/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
