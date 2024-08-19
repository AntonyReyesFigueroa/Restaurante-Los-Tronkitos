import React, { useEffect, useState } from 'react'
import './Empleado.css'
import useModal from '../../../Hooks/useModal'
import FormEmpleado from './FormEmpleado/FormEmpleado'

import useGet from '../../../Hooks/useGet'
import DetalleEmpleado from './DetalleEmpleado/DetalleEmpleado'


const Empleado = () => {

  const { isOpenModal, setIsOpenModal } = useModal()
  const [obtenerData, setObtenerData] = useState()


  const { data, getData } = useGet('https://66bf552c42533c403145d9af.mockapi.io/empleado')

  // console.log(data);



  useEffect(() => {
    getData()
  }, [isOpenModal])


  useEffect(() => {
    getData()
  }, [obtenerData])

  return (
    <div className='main__container'
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://images.prismic.io/qamarero/ZgZ388t2UUcvBRO2_normas-para-empleados-de-hosteleria-cuales-son.jpg?auto=format,compress")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',

      }}
    >

      <div className='btn__agregar'>
        <button onClick={() => {
          setIsOpenModal(!isOpenModal)
          setObtenerData(false)
        }}
        >
          + Agregar
        </button>
      </div>

      <div>
        {
          isOpenModal ?
            <div>
              <FormEmpleado
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
      <div className='container__empleado-general'>
        {
          data && data?.map(data => (
            <DetalleEmpleado
              key={data.id_empleado}
              data={data}
              setIsOpenModal={setIsOpenModal}
              setObtenerData={setObtenerData}
              getData={getData}
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

export default Empleado