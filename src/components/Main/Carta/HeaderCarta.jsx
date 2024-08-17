import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HeaderCarta = () => {
    return (

        <ul className='Carta_nav_container'>

            <Link to="/agregar/Platos">
                <li>Platos</li>
            </Link>

            <Link to="/agregar/Cocteles">
                <li>Cocteles</li>
            </Link>

            <Link to="/agregar/Bebidas">
                <li>Bebidas</li>
            </Link>


            <Outlet />
        </ul>





    )
}

export default HeaderCarta