import { useState, useEffect } from 'react';

function FormAnotação() {

  // Estados para a lista de notas e para os campos do formulário e para o usurario
  const [notas, setNotas] = useState([]);
  const [deQualVersiculo, setdeQualVersiculo] = useState('');
  const [nota, setNota] = useState('');
  const [usuario, setUsuario] = useState('');
  
  // Esse estado controla se estamos criando uma nota nova ou editando uma existente
  const [idEditando, setIdEditando] = useState(null);

  const API_URL = 'http://localhost:3000/notas';

  //(Buscar as notas do servidor)
  const buscarnotas = () => {

    // Pega o email do usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem("user_logado"));
    const email = usuarioLogado?.email;
    if (usuarioLogado ===  null) {
      
      fetch(`http://localhost:3000/notas?usuario=${""}`)

        .then((res) => res.json())

        .then((dados) => setNotas(dados))

        .catch((err) => console.error("Erro ao buscar notas:", err));

    }
    else {

      fetch(`http://localhost:3000/notas?usuario=${email}`)

        .then((res) => res.json())

        .then((dados) => setNotas(dados))

        .catch((err) => console.error("Erro ao buscar notas:", err));

    }
  
  };

  useEffect(() => {
    buscarnotas();
  }, []);

  //(Salvar ou Atualizar)
  const handleSalvarnota = (e) => {
    e.preventDefault();

    if (!deQualVersiculo.trim() || !nota.trim()) {

      alert("Por favor, preencha todos os campos.");

      return;
    }

    setUsuario(JSON.parse(localStorage.getItem("user_logado"))?.email);

    const dadosnota = { deQualVersiculo, nota, usuario };

    if (idEditando) {
      // Se tem um ID editando e um PUT
      fetch(`${API_URL}/${idEditando}`, {

        method: 'PUT',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(dadosnota),

      })

        .then(() => {

          buscarnotas();

          limparFormulario();

        });
    } else {

      // Se não tem ID editando e um POST
      fetch(API_URL, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(dadosnota),

      })

        .then(() => {

          buscarnotas();

          limparFormulario();

        });
    }
  };

  //Apagar nota
  const handleDeletarnota = (id) => {

    if (window.confirm("Deseja realmente excluir esta anotação?")) {

      fetch(`${API_URL}/${id}`, {

        method: 'DELETE',

      })

        .then(() => buscarnotas());

    }
  };

  // Preparar o formulário para edição
  const handlePrepararEdicao = (nota) => {

    setIdEditando(nota.id);

    setdeQualVersiculo(nota.deQualVersiculo);

    setNota(nota.nota);

    setUsuario(JSON.parse(localStorage.getItem("user_logado"))?.email);

  };

  // Limpar os inputs 
  const limparFormulario = () => {

    setIdEditando(null);

    setdeQualVersiculo('');

    setNota('');

  };

  return (
    <div className="crud-container">

      <h2 className="Titulo">📝 Minhas Anotações</h2>

      <form  className="Input" onSubmit={handleSalvarnota}>

        <h3 className="Titulo">{idEditando ? "Editar Anotação" : "Nova Anotação"}</h3>
        
        <input className="InputForm" type="text" placeholder="Qual Livro, Capitulo e Versículo" value={deQualVersiculo} onChange={(e) => setdeQualVersiculo(e.target.value)}/>
        
        <textarea className="InputForm" placeholder="Digite sua anotação aqui..." value={nota} onChange={(e) => setNota(e.target.value)} rows="4"/>

        <div>

          <button type="submit" className="login-button">

            {idEditando ? "Salvar Alterações" : "Adicionar nota"}

          </button>
          
          {idEditando && (

            <button type="button" className="login-button" onClick={limparFormulario}>Cancelar</button>

          )}
        </div>

      </form>

      <hr />

      <h3 className="Titulo" >Anotações Salvas</h3>

      {notas.length === 0 ? (

        <p>Nenhuma anotação encontrada.</p>

      ) : (

        <div>
          {notas.map((nota) => (

            <div className="nota-texto-container" key={nota.id}>

              <h4>{nota.deQualVersiculo}</h4>

              <p>{nota.nota}</p>
              
              <div>
            
                <button className="login-button" onClick={() => handlePrepararEdicao(nota)} >Editar</button>

                <button className="login-button" onClick={() => handleDeletarnota(nota.id)}>Excluir</button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}


export default FormAnotação;