import './Home.css'

import { Link } from "react-router-dom"

import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const url = "http://localhost:3000/products"

  const { data: items, loading, error } = useFetch(url)

  return (
    <div>
      <h2>Home</h2>
      <p>Produtos</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados...</p>}
        <ul className="products">
          {items && items.map((item) => (
            <li key={item.id}>{item.name} <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}      
        </ul>
    </div>
  );
};

export default Home;