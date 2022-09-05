import styles from './ChallengeCSS.module.css'

const ChallengeCSS = () => {
  const carList = [
    { id: 1, brand: "Volvo", color: "Preto", model: "XC40" },
    { id: 2, brand: "KIA", color: "Branco", model: "Sorento" },
    { id: 3, brand: "Nissan", color: "Prata", model: "GTR-R" },
    { id: 4, brand: "VW", color: "Vermelho", model: "Golf GTI" },
  ]

  return (
    <div className={styles.container}>
      {carList.map((car) => (
        <div key={car.id}>
          <p className={styles.p_details}>Marca: {car.brand}, Cor: {car.color}, Modelo: {car.model}</p>
        </div>
      ))}
    </div>
  );
};

export default ChallengeCSS;