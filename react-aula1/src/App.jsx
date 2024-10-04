const Hello = () => {
  return(
    <h1>Hello dev</h1>
  )
}
const app = () => {
  //parte logica do component
  return (
    //parte visual para o usuário
    <Hello/>
  );
}
export default app;