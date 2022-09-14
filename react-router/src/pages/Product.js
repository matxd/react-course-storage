import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams()
  const url = "http://localhost:3000/products/" + id
  const { data: product, loading, error} = useFetch(url)

  return (
    <>
      <h2>Products</h2>
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados...</p>}
      {product && (
        <div>
          <p>Nome: {product.name}</p>
          <p>Preço: R$ {product.price}</p>
          <p>Número do produto: {product.id}</p>
          <Link to={`/products/${id}/info`}>Mais informações</Link> {/* Nested Routes */}
        </div>
      )}
    </>
  );
};

export default Product;