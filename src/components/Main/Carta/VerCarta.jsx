import React, { useEffect, useState } from 'react'
import VerHeaderCarta from './VerHeaderCarta'
import useGet from '../../../Hooks/useGet'
import imgPlatoVacio from '../../../image/subirPlato.png'


const VerCarta = () => {

    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'
    const { data, getData } = useGet(URL)


    const [categoryPlato, setCategoryPlato] = useState('Plato')

    console.log(categoryPlato);


    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div>
                <ul className='Carta_nav_container  container__pedido-ul'>
                    <li onClick={() => setCategoryPlato('Plato')} className='header_pedido-li'>Platos</li>
                    <li onClick={() => setCategoryPlato('Coctel')} className='header_pedido-li'>Cocteles</li>
                    <li onClick={() => setCategoryPlato('Bebida')} className='header_pedido-li'>Bebidas</li>
                </ul>
            </div>




            {
                categoryPlato === 'Plato' ?
                    <div>
                        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Platos</h1>
                        <div className='container__empleado-general'>
                            {

                                data && data.map(data => (
                                    data.categoria === 'Plato' ?
                                        <article className='plato' key={data?.id} >
                                            <div className='plato_detalle'>
                                                <div className="empleado__tilte">
                                                    <h3>{data?.nombre}</h3>
                                                </div>

                                                <div className='container_empleado-info'>
                                                    <div className='empleado__img'>
                                                        {
                                                            data?.imagen ?
                                                                <img
                                                                    style={{ maxHeight: '220px' }}
                                                                    src={data?.imagen} alt={data?.nombre} />
                                                                :
                                                                <img src={imgPlatoVacio} alt={data?.name} />
                                                        }
                                                    </div>

                                                    <div className='empleado__info'>
                                                        <div className="empleado__info-datos">
                                                            <b>Descripción: </b>
                                                            <p>{data?.descripcion} </p>
                                                        </div>

                                                        <div className="empleado__info-datos">
                                                            <b>Precio: </b>
                                                            <p>{data?.precioUnitario} </p>
                                                        </div>

                                                        {/* {
                                                            data?.categoria !== 'Bebida' ?
                                                                <div className="empleado__info-datos">
                                                                    <b>Tiempo de preparación: </b>
                                                                    <p>{data?.time_preparation} </p>
                                                                </div>
                                                                :
                                                                <div></div>
                                                        } */}



                                                        <div className="empleado__info-datos">
                                                            <b>Categoria: </b>
                                                            <p>{data?.categoria} </p>
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
                    :
                    categoryPlato === 'Coctel' ?
                    <div>
                        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Platos</h1>
                        <div className='container__empleado-general'>
                            {

                                data && data.map(data => (
                                    data.categoria === 'Coctel' ?
                                        <article className='plato' key={data?.id} >
                                            <div className='plato_detalle'>
                                                <div className="empleado__tilte">
                                                    <h3>{data?.nombre}</h3>
                                                </div>

                                                <div className='container_empleado-info'>
                                                    <div className='empleado__img'>
                                                        {
                                                            data?.imagen ?
                                                                <img
                                                                    style={{ maxHeight: '220px' }}
                                                                    src={data?.imagen} alt={data?.name} />
                                                                :
                                                                <img src={imgPlatoVacio} alt={data?.name} />
                                                        }
                                                    </div>

                                                    <div className='empleado__info'>
                                                        <div className="empleado__info-datos">
                                                            <b>Descripción: </b>
                                                            <p>{data?.descripcion} </p>
                                                        </div>

                                                        <div className="empleado__info-datos">
                                                            <b>Precio: </b>
                                                            <p>{data?.precioUnitario} </p>
                                                        </div>

                                                        {/* {
                                                            data?.categoria !== 'Bebida' ?
                                                                <div className="empleado__info-datos">
                                                                    <b>Tiempo de preparación: </b>
                                                                    <p>{data?.time_preparation} </p>
                                                                </div>
                                                                :
                                                                <div></div>
                                                        } */}



                                                        <div className="empleado__info-datos">
                                                            <b>Categoria: </b>
                                                            <p>{data?.categoria} </p>
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
                    :
                    categoryPlato === 'Bebida' ?
                    <div>
                        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Platos</h1>
                        <div className='container__empleado-general'>
                            {

                                data && data.map(data => (
                                    data.categoria === 'Bebida' ?
                                        <article className='plato' key={data?.id} >
                                            <div className='plato_detalle'>
                                                <div className="empleado__tilte">
                                                    <h3>{data?.nombre}</h3>
                                                </div>

                                                <div className='container_empleado-info'>
                                                    <div className='empleado__img'>
                                                        {
                                                            data?.imagen ?
                                                                <img
                                                                    style={{ maxHeight: '220px' }}
                                                                    src={data?.imagen} alt={data?.name} />
                                                                :
                                                                <img src={imgPlatoVacio} alt={data?.name} />
                                                        }
                                                    </div>

                                                    <div className='empleado__info'>
                                                        <div className="empleado__info-datos">
                                                            <b>Descripción: </b>
                                                            <p>{data?.descripcion} </p>
                                                        </div>

                                                        <div className="empleado__info-datos">
                                                            <b>Precio: </b>
                                                            <p>{data?.precioUnitario} </p>
                                                        </div>

                                                        {/* {
                                                            data?.categoria !== 'Bebida' ?
                                                                <div className="empleado__info-datos">
                                                                    <b>Tiempo de preparación: </b>
                                                                    <p>{data?.time_preparation} </p>
                                                                </div>
                                                                :
                                                                <div></div>
                                                        } */}



                                                        <div className="empleado__info-datos">
                                                            <b>Categoria: </b>
                                                            <p>{data?.categoria} </p>
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
                    :
                    ''
            }





            {
                categoryPlato === 'Coctel' ?
                    <div>
                        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Cocteles</h1>
                        <div className='container__empleado-general'>
                            {
                                data && data.map(data => (
                                    data.category === 'Coctel' ?
                                        <article className='plato' key={data?.id_plato} >
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
                    :
                    ''
            }











            {
                categoryPlato === 'Bebida' ?
                    <div>
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
                    :
                    ''
            }




        </div>
    )
}

export default VerCarta