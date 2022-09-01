const Events = () => {
  const handleLog = (e) => {
    console.log(e) // Capturando mais detalhes do evento.
    console.log("Evento de click foi ativado!")
  }

  return(
    <div>
      <div>
        <button onClick={handleLog}>Evento de Click - log</button>
        <button onClick={() => console.log("Função no evento")}>Função no proprio evento - log</button>
        {/* Função no proprio evento não é recomendado, usado somente em casos muito simples */}
      </div>
    </div>
  );
};

export default Events;