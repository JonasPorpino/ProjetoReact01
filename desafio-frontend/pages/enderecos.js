import Pagina from '@/components/Pagina'
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const enderecos = () => {
  return (
    <Pagina>
      <h3>Endereço</h3>
        <Form>

            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>CEP:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="uf">
              <Form.Label>UF:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="logradouro">
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="complemento">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="info">
                  Enviar
            </Button>
        </Form>
    </Pagina>
    
  )
}

export default enderecos