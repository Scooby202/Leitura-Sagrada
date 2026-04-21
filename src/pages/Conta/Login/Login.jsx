function LoginPage () {


        return(
          <body className="BOX">
            <main className="TelaConta">
              <div className="LoginTodo">
                <a href="Recuperar.jsx" className="Login">Esqueceu a Senha?</a>
                <a href="Conta.jsx" className="Login">Criar Conta</a>
              </div>
            <div className="FormularioTodo">
              <h1 className="Titulo">Login</h1>
              <form className="Formulario" id="form" autoComplete="on">
                <div className="Espaço">
                  <input className="InputForm" name="email" type="email" id="email" autoComplete="email" required maxLength={30} placeholder='E-mail'></input>
                </div>
                <div className="Espaço">
                  <input className="InputForm" name="password" type="password" id="password" autoComplete="current-password" required minLength={8}maxLength={20} placeholder='Senha'></input>
                </div>
              </form>
              <div className="ContinuaTodo">
                <a className="Continua" id="Continua3" type="submit" onClick={Validação}></a>
              </div>
              <div className="ContinuaTodo2">
                <a className="Continua" id="Continua4" type="submit" onClick={Validação}></a>
              </div>
              <div className="LoginTodo2">
                <a href="Conta.jsx" className="Login">Criar Conta</a>
                <a href="Recuperar.jsx"className="Login">Esqueceu a Senha?</a>
              </div>
            </div>
            <div className="CapaConta">
                {/* Capa da tela */}
            </div>
        
        
        
            </main>
          </body>
         
    )

}

export default Login