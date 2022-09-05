import { useState } from 'react';
import './App.css';

import ImgAssets from './assets/img-assets.jpg'
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Props from './components/Props';
import PropsDestructuring from './components/PropsDestructuring';
import UserDetails from './components/UserDetails';

function App() {
  const nameConst = "Fulano"
  const [nameState] = useState("Ciclano")

  const carsList = [
    {id: 1, brand: "Volvo", color: "Preto", model: "XC40"},
    {id: 2, brand: "KIA", color: "Branco", model: "Sorento"},
    {id: 3, brand: "Nissan", color: "Prata", model: "GTR-R"},
    {id: 4, brand: "VW", color: "Vermelho", model: "Golf GTI"},
  ]

  function showMessage(){
    console.log("Função do componente pai sendo executada no componente filho!")
  }

  return (
    <div className="App">
      <h1>Seção 3 - Avançando em React</h1>
      {/* Imagem dentro de Public */}
      <img src="./img-public.jpg" alt="Centro da cidade" />
      {/* Imagem dentro de Assets */}
      <img src={ImgAssets} alt="Carro na estrada" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <Props name="Matheus" nameConst={nameConst} nameState={nameState} />
      <PropsDestructuring brand="BMW" color="Branca" model="X6" />
      {carsList.map((car) => (
      <PropsDestructuring brand={car.brand} color={car.color} model={car.model} id={car.id} key={car.id}/>
      ))}
      <Container>
        <p>Este é o conteudo do container</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <UserDetails />
    </div>
  );
}

export default App;
