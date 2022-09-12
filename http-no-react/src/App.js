import './App.css';

import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [setProducts] = useState([])

  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await response.json()
    // setProducts((prevProducts) => [ ...prevProducts, addedProduct ])

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  // useEffect(() => {
  //   async function fetchData(){
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <h1>Seção 07 - HTTP</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      )}
      {!error && <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} required />
            Preço: <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} required />
          </label>
          {loading && <input disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>}
    </div>
  );
}

export default App;