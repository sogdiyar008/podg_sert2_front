import './App.css';
import './css/bootstrap.min.css'
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products';
import Headers from './components/Headers';
import Footer from './components/Footer';
import Carts from './components/Carts';
import Login from './components/Login';
import Orders from './components/Orders';
import Registr from './components/Registr';


function App() {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <Headers setIsAuth={setIsAuth} isAuth={isAuth} token={token} />
      <Routes>
        <Route path='/' element={<Products isAuth={isAuth} token={token}/>}/>
        <Route path='/cart' element={<Carts token={token}/>}/>
        <Route path='/log' element={<Login setIsAuth={setIsAuth} setToken={setToken}/>}/>
        <Route path='/order' element={<Orders token={token}/>}/>
        <Route path='/reg' element={<Registr />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
