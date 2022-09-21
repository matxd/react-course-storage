import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const About = () => {
  const {counter} = useContext(CounterContext);

  return (
    <div>
      <h1>Sobre</h1>
      <p>Consumindo valor do contexto: {counter}</p>
    </div>
  );
};

export default About;