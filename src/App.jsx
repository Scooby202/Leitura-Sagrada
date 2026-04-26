import { useState } from 'react'
import Principal from './pages/Principal/Principal'
import Login from './pages/Conta/Login/Login'
//import RecuperarPage from './pages/Conta/EsqueceuSenha/EsqueceuSenha'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/Login.jsx' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
