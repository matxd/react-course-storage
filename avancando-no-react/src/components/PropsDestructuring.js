const PropsDestructuring = ({ brand, color, model, id }) => {
  return(
    <div>
      <p><strong>{id !== undefined ? `Carro: ${id}` : ''}</strong></p>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default PropsDestructuring;