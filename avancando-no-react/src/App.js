import './App.css';

import ImgAssets from './assets/img-assets.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
