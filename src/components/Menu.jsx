import "../styles/Styles.css"
import { useState, useEffect } from "react";

function Menu () {

  const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [capituloSelecionado, setCapituloSelecionado] = useState(null);

  //Busca os dados do json-server ao carregar o componente
  useEffect(() => {

    fetch('http://localhost:3000/livros')

      .then(res => res.json())

      .then(dados => {

        setLivros(dados);

        //já deixa o primeiro livro selecionado por padrão
        if(dados.length > 0) setLivroSelecionado(dados[0]);

        if(dados.length > 0) setLivroSelecionado(dados[0]);

      })

      .catch(erro => console.error("Erro ao buscar dados:", erro));

  }, []);

  // Função para mudar de livro e resetar o capítulo para o primeiro
  const handleTrocaLivro = (e) => {

    const livroId = e.target.value;

    const livro = livros.find(l => l.id === livroId);

    setLivroSelecionado(livro);

    setCapituloSelecionado(null);

  };

  const sanduiche = () => {

    if (lateralDireita.style.display == 'none') {

      lateralDireita.style.display = 'grid'

      meio.style.display = 'none'

    } else {

      lateralDireita.style.display = 'none'

      meio.style.display = 'grid'

    }

  }

    return (
        
      <div className="app-container">
        <aside className="sidebar sidebar-left">
            
          <h2>Leitura Sagrada</h2>
            
        </aside>
      
        <main className="bible-content" id="meio">

            <h1 className="chapter-title">   {capituloSelecionado ? (

              <>

                {livroSelecionado.nome} - Capítulo {capituloSelecionado.numero}

              </>

            ) : (

                  <p className="aviso">Bíblia</p>

                )}

            </h1>

            <div className="verses-container">

              <div className="texto-sagrado">

                {capituloSelecionado ? (

                  <>

                    <h3>{livroSelecionado.nome} - Capítulo {capituloSelecionado.numero}</h3>

                    <div className="versiculos-lista">

                      {capituloSelecionado.versiculos.map(versiculo => (

                        <p key={versiculo.numero} className="versiculo-linha">
                  
                          <span className="versiculo-numero"> {versiculo.numero} </span> 

                          {versiculo.texto}

                        </p>

                      ))}
                    </div>
                  </>
                ) : (

                      <p className="aviso">Selecione um capítulo para ler as passagens.</p>

                    )}

              </div>

            </div>
        
        </main>

        <aside className="sidebar sidebar-right" id="lateralDireita">

          <h2>Leitura Sagrada</h2>
        
          <div className="controle-grupo">

            <label htmlFor="select-livro">Escolha o Livro: </label>

            <select className="login-button" id="select-livro" onChange={handleTrocaLivro} value={livroSelecionado?.id || ""}>

              {livros.map(livro => (

                <option key={livro.id} value={livro.id}>{livro.nome}</option>

              ))}

            </select>

          </div>

          {livroSelecionado && (

            <div className="capitulos-container">

              <h3>Capítulos:</h3>

              <div className="botoes-capitulos">

                {livroSelecionado.capitulos.map(capitulo => (

                  <button key={capitulo.numero} onClick={() => setCapituloSelecionado(capitulo)} className="login-button">
                
                    {capitulo.numero}

                  </button>

                ))}

              </div>

            </div>

          )}

        </aside>

        <button className="login-button" id="mobileButton" type="button" onClick={sanduiche}> Menu </button>

      </div>

    )

}

export default Menu