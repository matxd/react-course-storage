import './App.css';

import Button from './components/Button';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Hello World em React</h1>
      <p id="style-p">Aprendendo React com Matheus Battisti</p>
      <Button />
      <Events />
      <TemplateExpressions />
      <Challenge />
    </div>
  );
}

export default App;