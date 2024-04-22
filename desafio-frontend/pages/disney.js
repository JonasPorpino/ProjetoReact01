import Pagina from '@/components/Pagina'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const disney = () => {
  
  const [personagens, setPersonagens] = useState([1,2,3])

  useEffect(()=>{
    Axios.get('https://api.disneyapi.dev/character').then(resultado=>{
       setPersonagens(resultado.data.data) 
    })

  },[])
  
  
  return (
   <Pagina>
        <h1>API da Disney</h1>

        <Row md={4}>
            {personagens.map(item=>(
                <Col key={item._id}>
                    <Card className="mt-3" border="secondary" >
                        <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Img variant='top' src={item.imageUrl} height={200}/>
                            </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
   </Pagina>
  )
}

export default disney