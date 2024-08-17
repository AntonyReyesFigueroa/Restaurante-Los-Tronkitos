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
},[obtenerData])

  return (
    <div className='main__container'>

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