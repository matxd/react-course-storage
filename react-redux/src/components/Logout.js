import { Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { logout } from '../redux/userReducer'

export const Logout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => { 
    dispatch(logout())
  }

  return (
    <>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  )
}
