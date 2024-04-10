import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

export default function Home() {
  return (
    <Pagina>
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
    </Pagina>
  );
}
