import { useState } from 'react';
import './App.css';

import ImgAssets from './assets/img-assets.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Props from './components/Props';
import PropsDestructuring from './components/PropsDestructuring';

function App() {
  const nameConst = "Fulano"
  const [nameState] = useState("Ciclano")

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
      <PropsDestructuring brand="BMW" color="Branca" model="X6"/>
    </div>
  );
}

export default App;
