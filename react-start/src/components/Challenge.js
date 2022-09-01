const Challenge = () => {
  let numberOne = 5
  let numberTwo = 15

  function handleSum(){
    let result = console.log(numberOne + numberTwo)
    return result
  }

  return(
    <div>
      <p>Numero Um: {numberOne}, Numero Dois: {numberTwo}</p>
      <button onClick={handleSum}>Somar valores</button>
    </div>
  );
};

export default Challenge;