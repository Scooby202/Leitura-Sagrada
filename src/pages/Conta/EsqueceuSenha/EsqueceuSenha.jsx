import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"
import { useNavigate } from "react-router-dom";

function EsqueceuSenha () {

  const navigate = useNavigate();

  const formData = document.querySelector("#form");

  const handleEsqueceuSenha = async (formData) => {

    // Faz a requisição buscando o par email
    const response = await fetch(`http://localhost:3000/users?email=${formData.get("email")}`);
    const users = await response.json();

    // Checa se encontrou alguém
    if (users.length > 0) {

      const user = users[0];

      localStorage.setItem("EmailASerMudadoASenha", JSON.stringify(user));

      navigate('/CodigoEsqueceuSenha.jsx');

    } else {

      alert("Email inválido. Tente novamente!");

    }
  }

    return(

      <div className="BOX">

        <main className="TelaConta">

          <div className="FormularioTodo">

            <h1 className="Titulo">Esqueceu Senha</h1>

            <form className="Formulario" id="form" autoComplete="on" action={handleEsqueceuSenha}>

              <div className="Input">

                <input className="InputForm" name="email" type="email" id="email" autoComplete="email" required maxLength={30} placeholder='E-mail'></input>

              </div>

            </form>

            <div className="ContinuaTodo">

                <a className="login-button" id="Continua3" type="submit" onClick={Validação}>CONTINUAR</a>

            </div>

            <div className="LoginTodo2">

                <a href="Login.jsx" className="Login">Login</a>

                <a href="CriarConta.jsx"className="Login">Criar Conta</a>

            </div>

          </div>
        
          <footer className="BarraInferior">

            <BarradeAcões/>

          </footer>
        
        </main>
      </div>
         
    )

}

export default EsqueceuSenha