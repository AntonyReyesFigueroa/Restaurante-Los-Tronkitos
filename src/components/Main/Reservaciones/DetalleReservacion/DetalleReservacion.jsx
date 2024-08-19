import React from 'react'
import useDelete from '../../../../Hooks/useDelete'
import useDate from '../../../../Hooks/useDate'

const DetalleReservacion = ({ data, setIsOpenModal, setObtenerData, getData, buscar }) => {

  const URL = 'https://6490763d1e6aa71680cb4c3b.mockapi.io/api/reservaciones'

  const modificarPlato = () => {
    setIsOpenModal(true)
    setObtenerData(data)

  }




  console.log(data.fecha);

  console.log(buscar);

  console.log(data.fecha === buscar);

  const { deleteData } = useDelete(URL)

  const eliminarData = () => {

    var resultado = window.confirm(`Estas seguro de eliminar la reservacion en la fecha ${data.fecha}`);
    if (resultado === true) {

      deleteData(data?.id)
      getData()
      getData()

      window.alert(`La reservación de la fecha  ${data.fecha} se ah eliminado`);
      getData()
      getData()

    } else {
      window.alert(`La reservación de la fecha ${data.fecha} no fue eliminado`);
    }
  }
  // console.log(data);

  return (

    <div>
     {
      data.fecha === buscar ?
      <article className='empleado reservacion' style={{
        maxHeight: '200px'
      }}>
        <div className="empleado__tilte">
          <h3>{data.fecha}</h3>
        </div>

        <div className='container_empleado-info container_reservation-info'>

          <div className='empleado__info reservation__info'>
            <div className="empleado__info-datos reservation__info-datos ">
              <b>Numero de personas: </b>
              <p>{data.numero_mesa} </p>
            </div>



            <div className="empleado__info-datos reservation__info-datos">
              <b>Telefono: </b>
              <p>{data.phone} </p>
            </div>


            {/* <div className="empleado__info-datos">
                        <b>Cunpleños: </b>
                        <p>{data.Description} </p>
                    </div> */}


          </div>
        </div>

        <div className="btn_empleados">
          <button onClick={modificarPlato}>Modificar</button>
          <button onClick={eliminarData}>Eliminar</button>
        </div>

      </article>
      :
      buscar === ''?
      <article className='empleado reservacion' style={{
        maxHeight: '200px'
      }}>
        <div className="empleado__tilte">
          <h3>{data.fecha}</h3>
        </div>

        <div className='container_empleado-info container_reservation-info'>

          <div className='empleado__info reservation__info'>
            <div className="empleado__info-datos reservation__info-datos ">
              <b>Numero de personas: </b>
              <p>{data.numero_mesa} </p>
            </div>



            <div className="empleado__info-datos reservation__info-datos">
              <b>Telefono: </b>
              <p>{data.phone} </p>
            </div>


            {/* <div className="empleado__info-datos">
                        <b>Cunpleños: </b>
                        <p>{data.Description} </p>
                    </div> */}


          </div>
        </div>

        <div className="btn_empleados">
          <button onClick={modificarPlato}>Modificar</button>
          <button onClick={eliminarData}>Eliminar</button>
        </div>

      </article>
      :
      null
     }
    </div>
  )
}

export default DetalleReservacion