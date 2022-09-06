import './MyForm.css'

import { useState } from 'react'

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  // onChange retorna um objeto que pode ser capturado com todos os detalhes daquele evento
  const handleName = (event) => setName(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Enviando formulário")
    console.log(name, email, bio, role)

    // Limpando input's do form
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  return (
    <div>
      {/* onSubmit é um evento para conseguirmos manipular os dados antes do envio */}
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
        </div>
        <label> {/* Criação de form com label envolvendo input, recomendado na doc. do react */}
          <span>E-mail: </span> 
          <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(event) => setEmail(event.target.value)} value={email} />
        </label>
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder="Descrição do usuario" onChange={(event) => setBio(event.target.value)} value={bio} />
        </label>
        <label>
          <span>Cargo na Empresa: </span>
          <select name="role" onChange={(event) => setRole(event.target.value)} value={role}>
            <option disabled></option>
            <option value="ceo">CEO</option>
            <option value="cto">CTO</option>
            <option value="programmer">Programador(a)</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;