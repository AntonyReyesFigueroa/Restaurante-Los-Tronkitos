import React from 'react'
import platoDelDia from '../../../image/Ceviche_trucha.jpg'
import HeaderCarta from './HeaderCarta'
import './Carta.css'

const Carta = () => {
  return (
    <div className="carta">

      <div className='container_platoDia'>
        {/* <p> Agregar platos aqui</p>
        <b>Pa</b> */}
        <HeaderCarta />
        {/* <img src={platoDelDia} alt="plato del dia" /> */}
      </div>

    </div>
  )
}

export default Carta