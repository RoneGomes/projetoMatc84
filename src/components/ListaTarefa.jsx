import React,{useEffect,useState} from "react";
import './Estilo.css';



function ListaTarefa (){
        const [tarefa,setTarefa]=useState();
        const[listTaf,setListaTaf]=useState(['comprar pão ', 'estudar JS'])

        useEffect(()=>{
            const tarefaStore = localStorage.getItem('listTaf')
            
            if(tarefaStore){
                setListaTaf(JSON.parse(tarefaStore))
            } 
        },[])

        useEffect(()=>{
            localStorage.setItem('listTaf',JSON.stringify(listTaf))
        },[listTaf])


        const handleClick = () =>{
                setListaTaf([...listTaf,tarefa])
                setTarefa('')
        }


    return(
        <div className="divTarefa">
            <h1>TAREFAS</h1><br />

            <div >
                <input type="text" placeholder="digite sua tarefa"
                onChange={e=>setTarefa(e.target.value)} 
                value={tarefa} />
                <button className="btnAdicionar" onClick={handleClick}>adicionar</button>
            </div>

            {listTaf.map(lis => (
                <div>
                    <span key={lis}>*{lis}</span><br /><br />
                </div>
            ))}

        </div>
    );

};

export default ListaTarefa;