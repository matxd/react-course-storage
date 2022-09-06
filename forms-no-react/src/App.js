import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Seção 5 - Forms</h2>
      <MyForm user={{ name: "Fulano", email: "fulano@email.com", bio: "Eu sou Developer", role: "programmer" }} />
    </div>
  );
}

export default App;
