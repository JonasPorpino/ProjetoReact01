import React from 'react'

const Box = (props) => {
    const nome = 'Jonas Nunes';
  return (
    <>
        <div className="border border-secondary mb-3">
            <h1 className='bg-secondary text-white text-center'>{props.titulo}</h1>
            {props.children}
        </div>
        <div>
            <p>
                {props.teste}
            </p>
        </div>
        
    </>
  )
}

export default Box