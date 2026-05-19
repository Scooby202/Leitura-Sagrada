import CRUDAnotações from "../../components/CRUDAnotações"
import BarradeAções from "../../components/BarradeAções"

function Anotações () {

    return (

        <div>

            <main>

                <div className="CentrodaPagina">

                    <CRUDAnotações/>

                </div>
            
            </main> 

            <footer className="BarraInferior">

                    <BarradeAções/>

            </footer>

        </div>

    )

}
export default Anotações