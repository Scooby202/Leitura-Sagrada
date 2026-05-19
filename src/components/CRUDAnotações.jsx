import { useState } from "react";
import { useEffect } from "react";
import FormAnotação from "./FORMAnotação";

function CRUDAnotações () {


    return (
    
        <div className="Anotações-content">
            <aside className="sidebar sidebar-left">
                
            <h2>Leitura Sagrada</h2>

            </aside>
        
            <main className="Anotações-content2">

                <div className="verses-container">
                    <div className="texto-sagrado">

                        <FormAnotação/>

                    </div>
                </div>
            </main>

        </div>

    );

}

export default CRUDAnotações