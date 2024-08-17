import React, { useState } from 'react'
import './Header.css'
import userDefault from '../../image/user_img.avif'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = ({ isOpen, setIsOpen }) => {

    const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();





    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <Link to='/'>
                    <div className='nav__logo'>
                        <img src='https://los-tronkitosv1.netlify.app/assets/logo-682d8ef6.png' alt="" />
                    </div>
                </Link>
                <p>Los tronkitos</p>

                <div className={`nav_toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className={`nav__links ${isOpen && "open__menu"}`} onClick={() => setIsOpen(false)} >
                <li> <Link to='/'>Inicio</Link> </li>
                <li> <Link to='/sobre-nosotros'>Sobre nosotros</Link> </li>




                {
                    isAuthenticated ?

                        <li> <Link to='/agregar/Platos'>Agregar</Link> </li>

                        :

                        <li onClick={() => loginWithRedirect()}> <Link to='/agregar/Platos'>Agregar</Link> </li>

                }

                {
                    isAuthenticated ?

                        <li> <Link to='/pedido'>Pedido</Link> </li>

                        :

                        <li onClick={() => loginWithRedirect()}> <Link to='/pedido'>Pedido</Link> </li>

                }


                {
                    isAuthenticated ?

                        <li> <Link to='/reservaciones'>Reservaciones</Link> </li>

                        :

                        <li onClick={() => loginWithRedirect()}> <Link to='/reservaciones'>Reservaciones</Link> </li>

                }


                {/* {
                    isAuthenticated ?

                        <li> <Link to='/reseña'>Reseña</Link> </li>

                        :

                        <li onClick={() => loginWithRedirect()}> <Link to='/reseña'>Reseña</Link> </li>

                } */}

                {
                    isAuthenticated ?
                        <li> <Link to='/empleado'>Empleado</Link> </li>
                        :
                        <li onClick={() => loginWithRedirect()}> <Link to='/empleado'>Empleado</Link> </li>
                }


                {
                    isOpen ?
                        isAuthenticated ?
                            <li className='pointer' onClick={() => logout()}  >salir</li>
                            :
                            <li className='pointer' onClick={() => loginWithRedirect()} >Registrate</li>
                        : ''
                }
            </div>

            <div className='nav__user'>
                <div className='nav__user-datos ocultar'>

                    {
                        isLoading ?
                            <p>Cargando...</p>
                            :
                            isAuthenticated ?
                                <p> {user.given_name} </p>
                                :
                                <p>Sin usuario</p>
                    }


                    {
                        isAuthenticated ?
                            <button onClick={() => logout()}>
                                salir
                            </button>
                            :


                            <button className='btn_inicioSecion' onClick={() => loginWithRedirect()}>
                                Registrate
                            </button>

                    }

                </div>

                {
                    isLoading ?
                        <p></p>
                        :

                        isAuthenticated ?
                            
                            // <img className='ocultar' src='http://res.cloudinary.com/dp3njcqhi/image/upload/v1690692106/Empleados/cruefeghojw2gkxgmpd3.jpg' alt={user.given_name} />
                            <img className='ocultar' src={user.picture} alt={user.given_name} />
                            :
                            <img className='ocultar' src={userDefault} alt="" />
                }

            </div>
        </nav>
    )
}

export default Header