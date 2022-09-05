import './App.css';

import ChallengeCSS from './components/ChallengeCSS';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Seção 4 - CSS</h1>
      <p>Este parágrafo está no App pegando o estilo do MyComponent</p>
      <MyComponent />
      <h2>Challenge CSS</h2>
      <ChallengeCSS />
    </div>
  );
}

export default App;
