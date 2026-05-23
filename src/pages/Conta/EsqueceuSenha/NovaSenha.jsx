import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NovaSenha () {

  const API_URL = 'http://localhost:3000/users';

  const navigate = useNavigate();

  const handleSalvarSenha = async (formData) => {
    
    //a senha direto do formData usando o atributo 'name' dos inputs
    const passwordTexto = formData.get("password");

    const confirmaPassword = formData.get("password2");


    // Validação extra
    if (passwordTexto !== confirmaPassword) {

      alert("As senhas não coincidem!");

      return;

    }

    const usuarioLocalStorage = JSON.parse(localStorage.getItem("EmailASerMudadoASenha"));

    if (!usuarioLocalStorage?.id) {

      alert("Erro: Usuário não encontrado.");

      return;

    }

    try {

      const response = await fetch(`${API_URL}/${usuarioLocalStorage.id}`);
      const userCompleto = await response.json();
 
      const usuarioAtualizado = { ...userCompleto, password: passwordTexto };

      // Enviamos o PUT
      await fetch(`${API_URL}/${usuarioLocalStorage.id}`, {

        method: 'PUT',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(usuarioAtualizado),

      });

      alert("Senha alterada com sucesso!");

      navigate('/Login.jsx');

    } catch (erro) {

      console.error(erro);

      alert("Erro ao tentar atualizar a senha.");

    }

  };

  return(

      <div className="BOX">

        <main className="TelaConta">

          <div className="FormularioTodo">

            <h1 className="Titulo">Nova Senha</h1>
            
            <form className="Formulario" id="form" autoComplete="on" action={handleSalvarSenha}>

              <div className="Input">

                <input className="InputForm" name="password" type="password" id="password" autoComplete="password" required minLength={8} maxLength={20} placeholder='Nova Senha'></input>
              </div>

              <div className="Input">

                <input className="InputForm" name="password2" type="password" id="password2" autoComplete="password2" required minLength={8} maxLength={20} placeholder='Confirmar Senha'></input>

              </div>
              
              <div className="ContinuaTodo">

                <button className="login-button" id="Continua2" type="submit" onClick={Validação}>CONTINUAR</button>

              </div>

            </form>

            <div className="LoginTodo2">

                <a href="Login.jsx" className="Login">Login</a>

                <a href="EsqueceuSenha.jsx" className="Login">Esqueceu a Senha?</a>

            </div>

          </div>
        
          <footer className="BarraInferior">

            <BarradeAcões/>

          </footer>
        
        </main>

      </div>
  )
  
}

export default NovaSenha