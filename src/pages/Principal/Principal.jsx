import BarradeAcões from "../../components/BarradeAções"
import Menu from "../../components/Menu"


function Principal () {

    return (

        <div>

            <main>

                <div className="CentrodaPagina">

                    <Menu/>

                </div>
            
            </main> 

            <footer className="BarraInferior">

                    <BarradeAcões/>

            </footer>

        </div>

    )
}

export default Principal