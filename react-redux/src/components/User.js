import { useSelector } from "react-redux"
import { selectUser } from '../redux/userReducer'

export const User = () => {
  // useSelector seleciona um reducer que está dentro da store, o nome do reducer da store será usado nesse hook
  const { name } = useSelector(selectUser)

  return (
    <>
      <div>
        <h1>Usuário: {name}</h1>
      </div>
    </>
  )
}
