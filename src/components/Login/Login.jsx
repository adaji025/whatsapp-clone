import React, {useRef} from 'react'
import {v4 as uuidV4} from 'uuid'
import { Button, Container, Form } from 'react-bootstrap'

const Login = ({onIdSubmit}) => {
    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    
    function createNewId() {
        onIdSubmit(uuidV4())
    }
    
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ height: '100vh'}}>
        <Form className='cw' onSubmit={handleSubmit}>
            <Form.Group className="mx-auto mb-3">
                <Form.Label className='fw-bold'>Enter Your ID</Form.Label>
                <Form.Control type='text' ref={idRef} required ></Form.Control>
            </Form.Group>
            <Button type='submit' className='me-3'>Login</Button>
            <Button variant='secondary' onClick={createNewId}>Create an ID</Button>
        </Form>
    </Container>
  )
}

export default Login