import "../styles/Styles.css"
import { useState, useEffect } from "react";

function Menu () {

const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [capituloSelecionado, setCapituloSelecionado] = useState(null);

  // 1. Busca os dados do json-server ao carregar o componente
  useEffect(() => {
    fetch('http://localhost:3000/livros')
      .then(res => res.json())
      .then(dados => {
        setLivros(dados);
        // Opcional: já deixa o primeiro livro selecionado por padrão
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
    setCapituloSelecionado(null); // Reseta o capítulo ao mudar de livro
  };

    return (
        
    <div className="app-container">
        <aside className="sidebar sidebar-left">
            
        <h2>Leitura Sagrada</h2>
            {/* Lista de livros aqui */}
        </aside>
      
        <main className="bible-content">
            <h1 className="chapter-title">   {capituloSelecionado ? (
          <>
            {livroSelecionado.nome} - Capítulo {capituloSelecionado.numero}
          </>
        ) : (
          <p className="aviso">Biblia</p>
        )}  </h1>
            <div className="verses-container">
 <div className="texto-sagrado">
        {capituloSelecionado ? (
          <>
            <h3>{livroSelecionado.nome} - Capítulo {capituloSelecionado.numero}</h3>
            <div className="versiculos-lista">
              {capituloSelecionado.versiculos.map(versiculo => (
                <p key={versiculo.numero} className="versiculo-linha">
                  {/* Acessamos as propriedades primitivas (.numero e .texto) em vez do objeto inteiro! */}
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
        <aside className="sidebar sidebar-right">
        <h2>Leitura Sagrada</h2>
        
        {/* SELETOR DE LIVROS */}
      <div className="controle-grupo">
        <label htmlFor="select-livro">Escolha o Livro: </label>
        <select id="select-livro" onChange={handleTrocaLivro} value={livroSelecionado?.id || ""}>
          {livros.map(livro => (
            <option key={livro.id} value={livro.id}>{livro.nome}</option>
          ))}
        </select>
      </div>

            {/* Lista de livros aqui */}
            {livroSelecionado && (
        <div className="capitulos-container">
          <h3>Capítulos:</h3>
          <div className="botoes-capitulos">
            {livroSelecionado.capitulos.map(capitulo => (
              <button 
                key={capitulo.numero}
                onClick={() => setCapituloSelecionado(capitulo)}
                className={capituloSelecionado?.numero === capitulo.numero ? "ativo" : ""}
              >
                {capitulo.numero}
              </button>
            ))}
          </div>
        </div>
      )}
        </aside>
    </div>

    )

}

export default Menu