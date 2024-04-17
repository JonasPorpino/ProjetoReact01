import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'



const contador = () => {
    
    let qtd = 0
    
    function adicionar(){
        qtd = qtd+1
    }

    return (
        <Pagina>
            <h1>Contador</h1>

            <Button onClick={adicionar}> + </Button>
            <h2 className='mt-3'>{qtd}</h2>
        </Pagina>
    )
}

export default contador