var container = document.getElementById("root");

function Titulo(props){
    return (


        <>
            <h1>Oi amiga {props.nome}</h1>
        </>

    )
}

function  Titulos(){

    return (

        <>

        <Titulo nome="brian"/>
        <Titulo nome="ooe"/>
        <Titulo nome="lin"/>
        <Titulo nome="fef"/>
        <Titulo nome="xuxu"/>
        <Titulo nome= "oifne"/>

        </>
    
    )

}

ReactDOM.createRoot(container).render(<Titulos/>)