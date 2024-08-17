import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import useModal from '../../../Hooks/useModal';
import useGet from '../../../Hooks/useGet';
import usePost from '../../../Hooks/usePost';
import Cookies from 'js-cookie';
import FormReservacion from './FormReservacion/FormReservacion';
import DetalleReservacion from './DetalleReservacion/DetalleReservacion';
import './Reservaciones.css'
import { FaSearch } from 'react-icons/fa';
import useDate from '../../../Hooks/useDate';

const Reservaciones = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();

  const [valueCookie, setValueCookie] = useState();


  const [buscar, setBuscar] = useState("")

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setBuscar(nuevoTexto);
  };


  const handleCookie = (req, res) => {

    if (valueCookie) {
      Cookies.set('testCookie', valueCookie, { expires: 20, path: "/" });
    }
  };

  useEffect(() => {
    const gettingCookie = Cookies.get("testCookie");
    setValueCookie(gettingCookie)
  }, []);


 
  const { isOpenModal, setIsOpenModal } = useModal()
  const [obtenerData, setObtenerData] = useState()

  const [dataVacia, setDataVacia] = useState(true)

  const URL = 'https://6490763d1e6aa71680cb4c3b.mockapi.io/api/reservaciones'
  // const URL = 'https://64c6d8440a25021fde91f942.mockapi.io/Reserva-Cliente'

  const { data, getData } = useGet(URL)
  const { createData } = usePost(URL)





  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: 'center',
            padding: '1em',
            color: 'white'

          }}
        >Hola, {user?.given_name} haga aqui su reservación pronto nos contactaremos con usted</h1>
      </div>
      <div className='btn__agregar'>
        <button onClick={() => {
          setIsOpenModal(!isOpenModal)
          setObtenerData(false)
        }}
        >
          + Agregar
        </button>
      </div>

      <div className='buscador__input'>
        <input type="date" placeholder='Busqueda reserva'
          onChange={handleInputChange}
        />
        <FaSearch className='buscador__icono' />
      </div>


      <div>
        {
          isOpenModal ?
            <div>
              <FormReservacion
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                getData={getData}
                obtenerData={obtenerData}
                setObtenerData={setObtenerData}
              />

            </div>
            :
            <div>

            </div>
        }

      </div>

      <div className='container__empleado-general container__reservation'>
        {
          data && data?.map(data => (
            <DetalleReservacion
              key={data.id_empleado}
              data={data}
              setIsOpenModal={setIsOpenModal}
              setObtenerData={setObtenerData}
              getData={getData}
              buscar={buscar}
            // getAllPlato={getAllPlato}
            // setUpdateInfoPlato={setUpdateInfoPlato}
            // handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>


    </div>
  )
}

export default Reservaciones