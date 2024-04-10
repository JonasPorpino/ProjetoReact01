import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'


const alertas = () => {
  return (
    <>
        <Pagina>

        
            <div>
                <h1>
                    Alertas 
                </h1>
                
            </div>
            <Alert variant='dark'>
                Mensagem de alerta
            </Alert>
            <Alert variant='warning'>
                Mensagem de alerta
            </Alert>
        
        </Pagina>
    </>
  )
}

export default alertas