const PropsDestructuring = ({ brand, color, model }) => {
  return(
    <div>
      <h2>Destructuring em Propriedades</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default PropsDestructuring;