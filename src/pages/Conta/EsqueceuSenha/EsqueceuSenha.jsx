import BarradeAcões from "../../../components/BarradeAções"
import Validação from "../../../components/Validação"
import "../../../styles/Styles.css"

function EsqueceuSenha () {

    return(

      <div className="BOX">
        <main className="TelaConta">
          <div className="FormularioTodo">
            <h1 className="Titulo">Esqueceu Senha</h1>
            <form className="Formulario" id="form" autoComplete="on">
              <div className="Input">
                <input className="InputForm" name="email" type="email" id="email" autoComplete="email" required maxLength={30} placeholder='E-mail'></input>
              </div>
            </form>
            <div className="ContinuaTodo">
                <a className="login-button" id="Continua2" type="submit" onClick={Validação}>CONTINUAR</a>
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