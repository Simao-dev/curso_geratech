import { useRef, useState } from "react";

const Input = () => {

    //const [nome, setNome] = useState("");
    const nome = useRef("")
    
    return (
        <>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                //onChange={(e) => nome.current = e.target.value}
                ref={nome}
            />
            <button onClick={() => console.log(nome.current.value)}>mostrar</button>
            <h1>{nome.current}</h1>
        </>
    );
}

export default Input;

/*hooks exemplo de useState*/