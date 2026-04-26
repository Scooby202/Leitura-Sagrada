import "../styles/Styles.css"

function Menu () {

    return (
        
    <div className="app-container">
        <aside className="sidebar sidebar-left">
        <h2>Leitura Sagrada</h2>
            {/* Lista de livros aqui */}
        </aside>
      
        <main className="bible-content">
            <h1 className="chapter-title">Gênesis 1</h1>
            <div className="verses-container">
                <span className="verse">
                    <span className="verse-number">1</span>
                        No princípio, criou Deus os céus e a terra.
                </span>
                <span className="verse">
                    <span className="verse-number">2</span>
                        E a terra era sem forma e vazia...
                </span>
            </div>
        </main>
        <aside className="sidebar sidebar-right">
        <h2>Leitura Sagrada</h2>
            {/* Lista de livros aqui */}
        </aside>
    </div>

    )

}

export default Menu