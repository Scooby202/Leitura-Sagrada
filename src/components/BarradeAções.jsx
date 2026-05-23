import { Link } from 'react-router-dom';
import Login from '../pages/Conta/Login/Login';

function BarradeAções () {

    return (

        <div className="Barra">

            <div className="BotoesdaBarra">

                <Link class="login-button" id="button-Barra" to={"/Anotações.jsx"}>Estudos</Link>

                <Link class="login-button" id="button-Barra" to={"/"}>Bíblia</Link>

                <Link class="login-button" id="button-Barra">Favoritos</Link>

                <Link class="login-button" id="button-Barra" to={"/Login.jsx"}>Login</Link>

            </div>

            <div className="Credito"> 

                <p>Copyright © 2026 Leitura Sagrada</p>

            </div>

        </div>
        
    )

}

export default BarradeAções