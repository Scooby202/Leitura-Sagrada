import { useState, useEffect } from 'react'
import Principal from './pages/Principal/Principal'
import Login from './pages/Conta/Login/Login'
import EsqueceuSenha from './pages/Conta/EsqueceuSenha/EsqueceuSenha'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CriarConta from './pages/Conta/CriarConta/CriarConta'
import Anotações from './pages/Anotações/Anotações'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/Login.jsx' element={<Login/>}></Route>
        <Route path='/EsqueceuSenha.jsx' element={<EsqueceuSenha/>}></Route>
        <Route path='/CriarConta.jsx' element={<CriarConta/>}></Route>
        <Route path='/Anotações.jsx' element={<Anotações/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
