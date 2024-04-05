import Box from "@/components/Box";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container mt-3">
        <Box titulo="Tomás Turbando">
          <p>Um parágrafo</p>
          <p>Outro parágrafo</p>
        </Box>
        
        <Box titulo="Oscar Alho">
          <p>Um parágrafo</p>
          <p>Outro parágrafo</p>
          <button>Não sei</button>
        </Box>
          
        <Box titulo="Cuca Beludo">
          <p>Um parágrafo</p>
          <p>Outro parágrafo</p>
        </Box>

      </div>
    </>
  );
}
