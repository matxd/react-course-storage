import { useState } from 'react';

const ConditionalRender = () => {
  const [trueForRender, setRender] = useState(true)

  const changeTemplate = () => trueForRender ? setRender(false) : setRender(true)

  return(
    <div>
      {trueForRender && <p style={{color: 'green'}}>Isso só é exibido caso o estado seja verdadeiro</p>}
      {!trueForRender && <p style={{color: 'red'}}>Isso só é exibido caso o estado seja falso</p>}
      <button onClick={changeTemplate}>Mudar template renderizado</button>
    </div>
  );
};

export default ConditionalRender;