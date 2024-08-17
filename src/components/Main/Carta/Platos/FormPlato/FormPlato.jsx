import React, { useEffect, useState } from 'react'
import './FormPlato.css'
import subirPlato from '../../../../../image/subirPlato.png'
import { useForm } from 'react-hook-form';
import useSubirImage from '../../../../../Hooks/useSubirImage';
import usePut from '../../../../../Hooks/usePut';
import usePost from '../../../../../Hooks/usePost';

const FormPlato = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {

    // const URL = 'https://64ae40a1c85640541d4cae10.mockapi.io/Empleado'
    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'

    const { register, handleSubmit, reset } = useForm();

    const [empleado, setEmpleado] = useState()


    const { image, btnSubir } = useSubirImage('donzcferh', 'platos')


    const { updateData } = usePut(URL);

    // const { inputValue, handleInputChange, maxCharacters } = useMaxLengthInput(8)

  


    const { uploadData, createData } = usePost(URL)

    const submit = data => {

        console.log(data);

        if (obtenerData) {

            if (!obtenerData.imagen) {
                data.imagen = image
            } else if (obtenerData?.imagen !== image && obtenerData?.imagen && !image) {
                data.imagen = obtenerData?.imagen
                getData()
            } else {
                if (obtenerData?.imagen !== image) {
                    data.imagen = image
                    getData()
                } else {
                    data.imagen = obtenerData?.imagen
                    getData()
                }

            }

            updateData(data, obtenerData?.id)
            setIsOpenModal(false)
            getData()
            setObtenerData(false)
        } else {
            data.imagen = image
            setEmpleado(data)

            createData(data)
            console.log(uploadData);

            console.log(data);
            setIsOpenModal(false)
            getData()
        }
    }

    useEffect(() => {
        if (obtenerData) {
            reset(obtenerData)
        }
    }, [obtenerData])


    return (
        <form onSubmit={handleSubmit(submit)} className='form__container'>
            <div className='form'>
                <div className='form__tile'>
                    <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'} Plato </h3></div>
                    <div className='form__title-x'><h1 onClick={() => setIsOpenModal(!isOpenModal)} style={{ fontFamily: 'arial' }}> x </h1></div>
                </div>
                <div className='form__datos'>

                    <div className='form__datos-foto'>
                        <p>Añadir foto de Plato</p>

                        {
                            image ?

                                <img src={image} alt="Añadir foto de plato" />
                                :
                                obtenerData ?
                                    <img src={obtenerData.imagen ? obtenerData?.imagen : subirPlato} alt="Añadir foto " />
                                    :
                                    <img src={subirPlato} alt="Añadir foto de plato" />
                        }



                        <h6 onClick={btnSubir}>Subir imagen</h6>
                    </div>

                    <div className='form__datos-datos'>

                        <div className='container__datos-datos'>
                            <li className='form__item'>
                                <label htmlFor="name">Nombre :</label>
                                <input {...register('nombre')} type="text" id='name' placeholder=' Ingresar nombre ' required />
                            </li>

                            <li className='descripcion'>
                                <label htmlFor="descrpcion">Ingrese descripción :</label>
                                <textarea {...register('descripcion')} type="text" id='descripcion' placeholder=' Ingresar descripcion ' required 
                                 style={{
                                    width: '100%',
                                    height: '5em',
                                    outline: 'none',
                                    opacity: 0.6
                                }}
                                />
                            </li>

                            <li className='form__item'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
  

                            </li>
                            <li className='form__item'>
                                <label htmlFor="price">Ingrese precio:</label>
                                <input {...register('precioUnitario')} type="number" id='price' placeholder=' Ingresar precio del plato' required />
                            </li>

                          

                            <li className='form__item'>
                                <label>Ingrese Categoria:</label>
                            </li>
                            <li

                                className='form__item'>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Plato" />
                                    Plato
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Bebida" />
                                    Bebida
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Coctel" />
                                    Coctel
                                </label>

                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Postre" />
                                    Postre
                                </label>
                            </li>

                            <li className='form__item'>
                                <button
                                    style={{
                                        background: 'rgb(85, 85, 238)',
                                        width: '100px',
                                        borderRadius: '1em',
                                        margin: 'auto',
                                        marginTop: '10px',
                                    }}
                                >
                                    {obtenerData ? 'Modificar' : 'Registrar'} </button>
                                     {/* </button> */}
                            </li>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormPlato