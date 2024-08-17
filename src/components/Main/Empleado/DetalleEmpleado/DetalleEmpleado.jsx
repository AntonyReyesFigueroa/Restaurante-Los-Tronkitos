import React from 'react'
import './DetalleEmpleado.css'
import imgUser from '../../../../image/user_img.avif'
import useDelete from '../../../../Hooks/useDelete'

const DetalleEmpleado = ({ data, setIsOpenModal, setObtenerData, getData }) => {

    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/empleado'

    const modificarPlato = () => {
        setIsOpenModal(true)
        setObtenerData(data)
    }
    const { deleteData } = useDelete(URL)

    const eliminarData = () => {

        var resultado = window.confirm(`Estas seguro de eliminar a ${data.name}`);
        if (resultado === true) {

            deleteData(data?.id_empleado)
            getData()
            getData()

            window.alert(` ${data.name} se ah eliminado`);
            getData()
            getData()

        } else {
            window.alert(`${data.name} no fue eliminado`);
        }
    }

    return (
        <article className='empleado'>
            <div className="empleado__tilte">
                <h3>{data.name}</h3>
            </div>

            <div className='container_empleado-info'>
                <div className='empleado__img'>
                    {
                        data.img ?
                            <img src={data.img} alt={data.name} />
                            :
                            <img src={imgUser} alt={data.name} />
                    }
                </div>

                <div className='empleado__info'>
                    <div className="empleado__info-datos">
                        <b>Correo: </b>
                        <p>{data.email} </p>
                    </div>

                    <div className="empleado__info-datos">
                        <b>DNI: </b>
                        <p>{data.dni} </p>
                    </div>

                    <div className="empleado__info-datos">
                        <b>Telefono: </b>
                        <p>{data.phone} </p>
                    </div>


                    <div className="empleado__info-datos">
                        <b>Cunpleños: </b>
                        <p>{data.birthday} </p>
                    </div>

                    <div className="empleado__info-datos">
                        <b>Dirección: </b>
                        <p>{data.address} </p>
                    </div>

                    <div className="empleado__info-datos">
                        <b>Cargo: </b>
                        <p>{data.cargo} </p>
                    </div>


                    <div className="empleado__info-datos">
                        <b>Horario de trabajo: </b>
                        <p>{data.time} </p>
                    </div>

                    <div className="empleado__info-datos">
                        <b>Salario: </b>
                        <p>{data.salary} </p>
                    </div>
                </div>
            </div>

            <div className="btn_empleados">
                <button onClick={modificarPlato}>Modificar</button>
                <button onClick={eliminarData}>Eliminar</button>
            </div>

        </article>
    )
}

export default DetalleEmpleado