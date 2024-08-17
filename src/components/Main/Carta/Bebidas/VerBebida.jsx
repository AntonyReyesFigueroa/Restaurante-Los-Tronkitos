import React, { useEffect } from 'react'
import VerHeaderCarta from '../VerHeaderCarta'
import useGet from '../../../../Hooks/useGet'

const VerBebida = () => {
    const URL = 'https://64a9a8bc8b9afaf4844af5bc.mockapi.io/Platos'
    const { data, getData } = useGet(URL)

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <VerHeaderCarta />
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Bebidas</h1>
            <div className='container__empleado-general'>
                {
                    data && data.map(data => (
                        data.category === 'Bebida' ?
                            <article className='plato' style={{
                                minHeight: '310px'
                            }} key={data?.id_plato} >
                                <div className='plato_detalle'>
                                    <div className="empleado__tilte">
                                        <h3>{data?.name}</h3>
                                    </div>

                                    <div className='container_empleado-info'>
                                        <div className='empleado__img'>
                                            {
                                                data?.img ?
                                                    <img
                                                        style={{ maxHeight: '220px' }}
                                                        src={data?.img} alt={data?.name} />
                                                    :
                                                    <img src={imgPlatoVacio} alt={data?.name} />
                                            }
                                        </div>

                                        <div className='empleado__info'>
                                            <div className="empleado__info-datos">
                                                <b>Descripción: </b>
                                                <p>{data?.description} </p>
                                            </div>

                                            <div className="empleado__info-datos">
                                                <b>Precio: </b>
                                                <p>{data?.price} </p>
                                            </div>

                                            {
                                                data?.category !== 'Bebida' ?
                                                    <div className="empleado__info-datos">
                                                        <b>Tiempo de preparación: </b>
                                                        <p>{data?.time_preparation} </p>
                                                    </div>
                                                    :
                                                    <div></div>
                                            }



                                            <div className="empleado__info-datos">
                                                <b>Categoria: </b>
                                                <p>{data?.category} </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </article>
                            :
                            ''
                    ))
                }
            </div>
        </div>
    )
}

export default VerBebida