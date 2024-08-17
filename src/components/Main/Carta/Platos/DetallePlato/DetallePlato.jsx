import React from 'react'
import './DetallePlato.css'
import imgPlatoVacio from '../../../../../image/subirPlato.png'
import useDelete from '../../../../../Hooks/useDelete'
// import usePut from '../../../../../Hooks/usePut'

const DetallePlato = ({ data, setIsOpenModal, setObtenerData, getData }) => {
    // const URL = 'https://64ae40a1c85640541d4cae10.mockapi.io/Empleado'
    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'

    // const {update,updateData } = usePut(URL)

    console.log(data);

    const modificarPlato = () => {

        

        setIsOpenModal(true)
        setObtenerData(data)
        
    }
    const { deleteData } = useDelete(URL)

    const eliminarData = () => {

        var resultado = window.confirm(`Estas seguro de eliminar a ${data.nombre}`);
        if (resultado === true) {

            deleteData(data?.id)
            getData()
            getData()

            window.alert(` ${data.nombre} se ah eliminado`);
            getData()
            getData()

        } else {
            window.alert(`${data.nombre} no fue eliminado`);
        }
    }
    return (
        <article className='plato'>
            <div className='plato_detalle'>
                <div className="empleado__tilte">
                    <h3>{data.nombre}</h3>
                </div>

                <div className='container_empleado-info'>
                    <div className='empleado__img'>
                        {
                            data.imagen ?
                                <img src={data.imagen} alt={data.nombre} />
                                :
                                <img src={imgPlatoVacio} alt={data.name} />
                        }
                    </div>

                    <div className='empleado__info'>
                        <div className="empleado__info-datos">
                            <b>Descripción: </b>
                            <p>{data.descripcion} </p>
                        </div>

                        <div className="empleado__info-datos">
                            <b>Precio</b>
                            <p>: s/ {data.precioUnitario} </p>
                        </div>

                        <div className="empleado__info-datos">
                            <b>Categoria</b>
                            <p>: {data.categoria} </p>
                        </div>


                    </div>
                </div>

                <div className="btn_empleados">
                    <button onClick={modificarPlato}>Modificar</button>
                    <button onClick={eliminarData}>Eliminar</button>
                </div>
            </div>

        </article>
    )
}

export default DetallePlato