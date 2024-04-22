import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Pagina = (props) => { 
  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Meu site teste</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/alertas">Alertas</Nav.Link>
            <Nav.Link href="/botoes">Botões</Nav.Link>
            <Nav.Link href="/contador">Contador</Nav.Link>
            <Nav.Link href="/enderecos">Endereços</Nav.Link>
            <Nav.Link href="/disney">Disney</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='mt-3'>
            {props.children}
      </Container> 

    </>
  )
}

export default Pagina