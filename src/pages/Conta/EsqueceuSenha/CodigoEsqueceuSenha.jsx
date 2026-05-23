import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"
import { useNavigate } from "react-router-dom";

function CodigoEsqueceuSenha () {

const navigate = useNavigate();

  const handleCodigo = async (formData) => {

    navigate('/NovaSenha.jsx');

  }

    return(

      <div className="BOX">
        <main className="TelaConta">
          <div className="FormularioTodo">
            <h1 className="Titulo">Esqueceu Senha</h1>
            <form className="Formulario" id="form" autoComplete="on" action={handleCodigo}>
              <div className="Input">
                <input className="InputForm" name="codigo" type="codigo" id="codigo" autoComplete="codigo" required maxLength={30} placeholder='Codigo'></input>
              </div>
            </form>
            <div className="ContinuaTodo">
                <a className="login-button" id="Continua2" type="submit" onClick={Validação}>Validar Codigo</a>
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

export default CodigoEsqueceuSenha