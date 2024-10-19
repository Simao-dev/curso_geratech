import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState (0);

  function boasVindas(){
    alert("Boas Vindas");
  }


  useEffect(() => {
    console.log("useEffect foi chamado")
  });
  
  useEffect(() => {
    boasVindas();
    console.log("useEffect e chamado so uma vex")
  },[]);
  

  useEffect (() => {
    console.log(`useEffect ativado somente por dependências`);
  },[count])
  
  return (
    <>
      <h1>Pedro</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi veritatis ex in sapiente? Quos doloribus illo qui autem velit blanditiis corporis? Odio aperiam incidunt corrupti modi saepe necessitatibus inventore tempora.
      </p>
      <h2>contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <h2>contador: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>add</button>
    </>
  );
}

export default App;

//useEffect