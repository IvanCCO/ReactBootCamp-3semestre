import React, { useState } from "react";

function Candidato(props){

    // Com parametro tem que passar com parenteses atras 
    // () votar (parametro)

    const [votos, setVotos] = useState(0);

    function somar(){
        setVotos = useState(votos+1)
        return votos
    }
    
    
    return (

        <>
        <h1>Votos: </h1> 
        <button onClick={somar}>Somar</button>
        </>

    )

}

export default Candidato;