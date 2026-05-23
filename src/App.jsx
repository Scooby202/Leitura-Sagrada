import { useState, useEffect } from 'react'
import Principal from './pages/Principal/Principal'
import Login from './pages/Conta/Login/Login'
import EsqueceuSenha from './pages/Conta/EsqueceuSenha/EsqueceuSenha'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CriarConta from './pages/Conta/CriarConta/CriarConta'
import Anotações from './pages/Anotações/Anotações'
import CodigoEsqueceuSenha from './pages/Conta/EsqueceuSenha/CodigoEsqueceuSenha'
import NovaSenha from './pages/Conta/EsqueceuSenha/NovaSenha'

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

        <Route path='/CodigoEsqueceuSenha.jsx' element={<CodigoEsqueceuSenha/>}></Route>

        <Route path='/NovaSenha.jsx' element={<NovaSenha/>}></Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App
