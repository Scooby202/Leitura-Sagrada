import { useNavigate } from "react-router-dom";
import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"
import { useId } from "react";

function CriarConta () {

  const formData = document.querySelector("#form");
  const navigate = useNavigate();

  const registerUser = async (userData) => {

    const API_URL = "http://localhost:3000/users"; 

    try {

      //Verificar se o e-mail já existe
      const check = await fetch(`${API_URL}?email=${userData.email}`);
      const existing = await check.json();
      
      if (existing.length > 0) {

        alert("Este e-mail já está cadastrado!");

        return;

      }

      // Adicionar o novo usuário
      const response = await fetch(API_URL, {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(userData),
        
      });

      if (response.ok) {

        alert("Usuário cadastrado com sucesso!");

        navigate("/Login.jsx"); 

      }

    } catch (error) {

      console.error("Erro ao salvar:", error);

    }
    
  }

  const id = useId();

  // Esta função roda quando o botão de submit é clicado
  async function handleFormAction(formData) {

    const newUser = {

      id: crypto.randomUUID(),

      email: formData.get("email"),

      password: formData.get("password"), 

    };

    await registerUser(newUser);

  }


  return(

      <div className="BOX">

        <main className="TelaConta">

          <div className="FormularioTodo">

            <h1 className="Titulo">Criar Conta</h1>

            <form className="Formulario" id="form" autoComplete="on" action={handleFormAction}>

              <div className="Input">

                <input className="InputForm" name="email" type="email" id="email" autoComplete="email" required maxLength={30} placeholder='E-mail'></input>

              </div>

              <div className="Input">

                <input className="InputForm" name="password" type="password" id="password" autoComplete="current-password" required minLength={8}maxLength={20} placeholder='Senha'></input>

              </div>

            </form>

            <div className="ContinuaTodo">

                <a className="login-button" id="Continua2" type="submit" onClick={Validação}>CONTINUAR</a>

            </div>

            <div className="LoginTodo2">

                <a href="Login.jsx" className="Login">Login</a>

                <a href="EsqueceuSenha.jsx"className="Login">Esqueceu a Senha?</a>

            </div>

          </div>
        
          <footer className="BarraInferior">

            <BarradeAcões/>

          </footer>
        
        </main>
      </div>
         
  )

}

export default CriarConta