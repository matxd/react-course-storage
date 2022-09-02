import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Maria"])
  const [userList, setUserList] = useState([
    { id: 1, name: "Matheus", job: "Programmer" },
    { id: 2, name: "João", job: "QA" },
    { id: 3, name: "Maria", job: "Cloud" },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    // Previous State retorna o estado de um dado antigo junto com o seu valor e podemos transformar em um novo.
    setUserList((prevUserList) => { 
      console.log(prevUserList)
      return prevUserList.filter((user) => randomNumber !== user.id)
    })
  }

  return(
    <div>
      <p>Render List com indice sendo key</p>
      <ul> {/* Usando o indice do Array como key deve ser evitado, pode gerar erros */}
        {list.map((item, index) => ( <li key={index}> {item} </li> ))}
      </ul>   

      <p>Render List com chave unica 'ID' sendo key</p>
      <ul> {/* Usando a chave unica do Array de Objetos como key é o mais recomendado e utilizado, geralmente essa chave unica vem do banco de dados em forma de ID */}
        {userList.map((user) => ( <li key={user.id}> {user.name} - {user.job} </li> ))}
      </ul>
      <button onClick={deleteRandom}>Remover usuário aleatorio</button>
    </div>
  );
};

export default ListRender;