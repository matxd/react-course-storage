import { useParams } from "react-router-dom"

const Info = () => {
  const { id } = useParams()

  return (
    <div>
      <p>Mais informações sobre o produto: {id}</p>
    </div>
  );
};

export default Info;