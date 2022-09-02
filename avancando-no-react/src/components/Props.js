const Props = (props) => {
  return(
    <div>
      <h2>Props</h2>
      <p>Esse nome veio atraves de propriedade - {props.name}</p>
      <p>Esse nome veio atraves de propriedade e valor dinâmico na const - {props.nameConst}</p>
      <p>Esse nome veio atraves de propriedade e valor dinâmico no useState - {props.nameState}</p>
    </div>
  );
};

export default Props;