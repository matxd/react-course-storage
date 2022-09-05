import './MyComponent.css'
import styles from './MyComponent.module.css'

import { useState } from 'react';

const MyComponent = () => {
  const [template, setTemplate] = useState(true)
  const changeTemplate = () => template ? setTemplate(false) : setTemplate(true)

  return (
    <div>
      <p>Este parágrafo está no MyComponent vazando estilo para o App</p>
      <p className='my-p-style'>Este parágrafo está no MyComponent estilizado com uma classe</p>
      <p style={{color: "green", backgroundColor: "#c8cbcf", border: "2px solid black"}}>
        Este parágrafo está com estilização inline e isso deve ser evitado!
      </p>
      <p style={template ? {color: "#ff9900"} : {color: "#e5ff00"}}>
        Este parágrafo está com estilo inline dinâmico, através de um IF ternario
      </p>
      <p className={template ? "red-p" : "blue-p"}>
        Este parágrafo está com estilo de classe dinâmica que é o mais recomendado.
      </p>
      <button onClick={changeTemplate}>Clique aqui</button>
      <div className={styles.my_div_modules}>
        <p className={styles.my_p_modules}>
          Este parágrafo está estilizado com CSS Modules que também é muito utilizado.
        </p>
      </div>
    </div>
  );
};

export default MyComponent;