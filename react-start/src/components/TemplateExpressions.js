const TemplateExpressions = () => {
  const userData = {
    name: "Matheus",
    job: "Developer",
  }

  return(
    <> {/* Fragments */}
      <p>
        O seu nome é: {userData.name}, profissão: {userData.job}!
        {console.log("Esse log foi emitido através de um Template Expression")}
      </p>
    </>
  );
};

export default TemplateExpressions;