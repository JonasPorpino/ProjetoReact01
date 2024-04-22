import Pagina from '@/components/Pagina'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

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
            {personagens.map(item=>(
                <p>Jorge</p>
        ))}
   </Pagina>
  )
}

export default disney