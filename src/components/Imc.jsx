import React from "react";
import { useState } from "react";



function Imc (){
        const [altura,setAtura]= useState()
        const [peso,setPeso]=useState()
        const [result, setResult]= useState(0)
    


    const calcular =()=>{
        
        const imc=peso/(altura*altura);
        setResult(imc.toFixed(2));
        
    };

    const zerar =()=>{
        setAtura(0);
        setPeso(0);
        setResult(0);
    };

    return(
        <div>
            <h1>Calcular IMC</h1>
            <div className="divIMC">
                    <label htmlFor="">altura</label><br />
                    <input id="altura" type="text" 
                        placeholder="digite sua altura"
                        onChange={(e)=>setAtura(e.target.value)}
                        value={altura} 
                     />
                     <br />
                     <label htmlFor="">peso</label><br />
                    <input id="peso" type="number" 
                        placeholder="digite seu peso"
                        onChange={(e)=>setPeso(e.target.value)} 
                        value={peso}
                     />
                     <br /><br /><br />
                    <button onClick={calcular}>calcular</button><br /><br />
                    <label htmlFor="">resultado:</label>
                    <h1>{result}</h1>
                    <button onClick={zerar}>Zerar</button>
            </div>   
            
                
        </div>
    );
};

export default Imc;