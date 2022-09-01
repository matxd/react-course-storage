import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Hello World em React</h1>
      <p id="style-p">Aprendendo React com Matheus Battisti</p>
      <Button />
      <TemplateExpressions />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;