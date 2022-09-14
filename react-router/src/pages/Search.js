import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
  const [searchParams] = useSearchParams()
  const url = "http://localhost:3000/products?" + searchParams
  const {data: items, loading, error} = useFetch(url)


  return (
    <div>
      <h1>Resultados disponives</h1>
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

export default Search;