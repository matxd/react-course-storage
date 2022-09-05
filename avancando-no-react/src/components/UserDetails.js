const UserDetails = () => {
  const users = [
    { id: 1, nome: "Fulano", idade: 25, profissao: "Mecânico" },
    { id: 2, nome: "Ciclano", idade: 15, profissao: null },
    { id: 3, nome: "Beltrano", idade: 17, profissao: "Jovem Aprendiz" },
    { id: 4, nome: "Zézinho", idade: 20, profissao: "Gerente de Vendas" },
  ]

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.nome}, Idade: {user.idade}, Profissão: {user.profissao ?? "Não informado"}
            {user.idade >= 18 
              ? <p style={{color: "green"}}>Usuario pode tirar carteira de habilitação</p> 
              : <p style={{color: "red"}}>Usuario não pode tirar carteira de habilitação</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails