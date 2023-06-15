import React from "react";
import './Estilo.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <nav className="navHeader">
                <button>
                    <Link to="/">Contador</Link>
                </button>
                <button>
                    <Link to="/Imc">Imc</Link>
                </button>
                <button>
                    <Link to="/ListaTarefa">Lista de tarefa</Link>
                </button>
                
            </nav>
        </div>
    )
}

export default Header;