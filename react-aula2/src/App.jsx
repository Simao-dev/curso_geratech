import Banner from "./components/baner";
import Card from "./components/Card";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import Componemte1, { Componemte2 } from "./components/VariosComponetes";

const App = () => {
  return(
    //parte visivel do componemte
    <>
      {/*<Header/>
      <Banner/>
      <Componemte1/>
      <Componemte2/>*/}
      {/*<FormaDeBolo sabor = "laranja" cobertura ="Chocolate"/>
      <FormaDeBolo sabor = "chocolate" cobertura =" Chantili"/>*/}
      <Card 
        imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd2iLHbzyC9PLp1Gwk0mr0_WctRwLLYcQHw&s"}
        title={"Noticia 1"} 
        category={"esportes"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae explicabo enim, quo, praesentium suscipit eum cum cumque autem voluptatum, obcaecati ullam recusandae inventore amet nemo quis velit quaerat in error! ipsum"}
      />
      <Card 
        imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd2iLHbzyC9PLp1Gwk0mr0_WctRwLLYcQHw&s"}
        title={"Noticia 2"} 
        category={"finanças e investimentos"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae explicabo enim, quo, praesentium suscipit eum cum cumque autem voluptatum, obcaecati ullam recusandae inventore amet nemo quis velit quaerat in error! ipsum"}
      />
      <Card 
        imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd2iLHbzyC9PLp1Gwk0mr0_WctRwLLYcQHw&s"}
        title={"Noticia 3"} 
        category={"culinaria"} 
        paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae explicabo enim, quo, praesentium suscipit eum cum cumque autem voluptatum, obcaecati ullam recusandae inventore amet nemo quis velit quaerat in error! ipsum"}

      />
    </>  
  );
}
export default App;