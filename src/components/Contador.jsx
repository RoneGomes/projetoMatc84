
import React from 'react';
import './Estilo.css';
import { useState } from 'react';

function Contador() {

    const [conta , setConta] = useState(0);

    function handleClick(){
        setConta(conta+1);

    }
    function Zerar(){
        setConta(0);
    }


    return (
        <div>
            <h1>Contador</h1>
            <div className="divConntador">
                <h2>{conta}</h2>
            </div>
            <div className="divConntador">
                <button className='btnAdicionar'onClick={handleClick}>adicionar</button>
                <button className='btnZerar'onClick={Zerar}>zerar</button>
                
            </div>

        </div>
    )
}

export default Contador;