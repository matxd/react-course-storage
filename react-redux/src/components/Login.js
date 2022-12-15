import { useState } from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { changeUser } from '../redux/userReducer'

export const Login = () => {
  const dispatch = useDispatch() // Hook pra disparar as actions

  const [name, setName] = useState('')

  const handleLogin = () => { 
    dispatch(changeUser(name)) // Action changeUser é passada pro dispatch e espera um payload, nessa caso o state name
  }

  return (
    <>
      <Form>
        <h1 className='mt-5'>Login</h1>
        <Row className='align-items-center'>
          <Col sm={3} className='my-1'>
            <FormControl type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} />
          </Col>
          <Col sm={5}>
            <Button onClick={handleLogin}>Login</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
