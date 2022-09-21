import { useContext } from "react";
import ChangeCounter from "../components/ChangeContext";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Consumindo valor do contexto: {counter}</p>
      <ChangeCounter /> {/* Alterando valor do contexto */}
    </div>
  );
};

export default Home;