import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
  return (
    <>
        <Pagina>

        
            <div>
                <h1>
                    botoes 
                </h1>
                <Button variant='success'> 
                    Aperte não omi
                </Button>
                {' '}
                <Button variant='info'>
                    Melhor não Apertar
                </Button>
                {' '}
                <Button variant='danger'>
                    Você é que sabe
                </Button>
            </div>
        
        </Pagina>
    </>
  )
}

export default botoes