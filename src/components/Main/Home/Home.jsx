import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import Carrusel from './Carrusel';
import useGet from '../../../Hooks/useGet';

const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();


  const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'

  const { data } = useGet(URL);

  const [dataPlato, setdataPlato] = useState('')

  useEffect(() => {
    setdataPlato(data)
  }, [data])



  return (

    <div className='Inicio'
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://andeangreattreks.com/wp-content/uploads/Delicious-peruvian-foods.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',

      }}
    >
      <div className="Inicio__container">

        <div className='Inicio__container-title'>
          <h2>
            {isAuthenticated ?
              `Hola, ${user?.given_name} te damos la bienvenida al restaurante los tronkitos `
              :
              'Bienvenid@ al restaurante los tronkitos '
            }
          </h2>
        </div>

        <div className='Inicio-content'>
          Sabores auténticos que deleitan tu paladar en un ambiente acogedor y familiar.
        </div>

        <div className="inicio-horarioAtencion">
          <h2>
            Horario de atención
          </h2>

          <p>
            Lunes a Domingo 9:00 am - 5pm
          </p>
        </div>

        <div className='Inicio-verCarta' >
          <Link to="/ver-carta">Ver carta</Link>
        </div>

        <div>
          <Carrusel
            data={dataPlato}
          />
        </div>

      </div>
      <Outlet />
    </div>





  )
}

export default Home