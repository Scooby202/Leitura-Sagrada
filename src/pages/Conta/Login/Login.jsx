import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"
import { useNavigate } from "react-router-dom";

function Login () {

  const navigate = useNavigate();

  const formData = document.querySelector("#form");

  const handleLogin = async (formData) => {

    // Faz a requisição buscando o par email/senha
    const response = await fetch(`http://localhost:3000/users?email=${formData.get("email")}&password=${formData.get("password")}`);
    const users = await response.json();

    // Checa se encontrou alguém
    if (users.length > 0) {
      
      const user = users[0];

      // Guarda no navegador
      localStorage.setItem("user_logado", JSON.stringify(user));
  
      navigate('/');

    } else {

      alert("Usuário ou senha inválidos. Tente novamente!");

    }

  };


  return(

      <div className="BOX">

        <main className="TelaConta">

          <div className="FormularioTodo">

            <h1 className="Titulo">Login</h1>

            <form className="Formulario" id="form" autoComplete="on" action={handleLogin}>

              <div className="Input">

                <input className="InputForm" name="email" type="email" id="email" autoComplete="email" required maxLength={30} placeholder='E-mail'></input>

              </div>

              <div className="Input">

                <input className="InputForm" name="password" type="password" id="password" autoComplete="current-password" required minLength={8}maxLength={20} placeholder='Senha'></input>

              </div>

            </form>

            <div className="ContinuaTodo">

                <a className="login-button" id="Continua" type="submit" onClick={Validação}>CONTINUAR</a>

            </div>

            <div className="LoginTodo2">

                <a href="CriarConta.jsx" className="Login">Criar Conta</a>

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

export default Login