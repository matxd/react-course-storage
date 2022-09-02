import { useState } from 'react'

const ManageData = () => {
  const [count, setCount] = useState(0) // Valor inicial do State
  
  const counter = () => {
    setCount(count + 1)
    console.log(count)
  }

  return(
    <div>
      <p>Valor: {count}</p>
      <button onClick={counter}>Contador</button>
    </div>
  );
};

export default ManageData;