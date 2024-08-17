import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const VerHeaderCarta = () => {
    return (
        <ul className='Carta_nav_container'>

            <Link to="/ver-Platos">
                <li>Platos</li>
            </Link>

            <Link to="/ver-Cocteles">
                <li>Cocteles</li>
            </Link>

            <Link to="/ver-Bebidas">
                <li>Bebidas</li>
            </Link>

            <Outlet />
        </ul>

    )
}

export default VerHeaderCarta