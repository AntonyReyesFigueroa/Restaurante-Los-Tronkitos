import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import usePut from '../../../../Hooks/usePut';
import usePost from '../../../../Hooks/usePost';

const FormReservacion = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {

  const URL = 'https://6490763d1e6aa71680cb4c3b.mockapi.io/api/reservaciones'

    const { register, handleSubmit, reset } = useForm();

    const [empleado, setEmpleado] = useState()

    // const { image, btnSubir } = useSubirImage('donzcferh', 'empleados')


    const { updateData } = usePut(URL);

    // const { inputValue, handleInputChange, maxCharacters } = useMaxLengthInput(8)

    const { uploadData, createData } = usePost(URL)

    const submit = data => {

        if (obtenerData) {



            updateData(data, obtenerData?.id)
            getData()
            getData()
            setIsOpenModal(false)
            getData()
            setObtenerData(false)
        } else {

            setEmpleado(data)

            createData(data)
            getData()
            getData()

            console.log(data);
            setIsOpenModal(false)
            getData()
        }
    }

    useEffect(() => {
        if (obtenerData) {
            reset(obtenerData)
            getData()
        }
    }, [obtenerData])




    return (
        <form onSubmit={handleSubmit(submit)} className='form__container form__container-reservation'>
            <div className='form form-reservation'>
                <div className='form__tile'>
                    <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'} Reservación </h3></div>
                    <div className='form__title-x'><h1 onClick={() => setIsOpenModal(!isOpenModal)} style={{ fontFamily: 'arial' }}> x </h1></div>
                </div>


               
                <div className='form__datos'>



                    <div className='form__datos-datos'>

                        <div className='container__datos-datos'>
                            <li className='form__item form__item_reservation'>
                                <label htmlFor="fecha">Ingrese fecha de reservación:</label>
                                <input {...register('fecha')} type="date" id='fecha' required />
                            </li>


                            <li className='form__item form__item_reservation'>
                                <label htmlFor="phone">Ingrese Telefono:</label>
                                <input {...register('phone')} type="number" id='phone' placeholder=' Ingresar número de telefono' required maxLength={9} minLength={9} />
                            </li>

                            <li className='form__item form__item_reservation'>
                                <label htmlFor="numero_mesa">Ingrese número de personas:</label>
                                <input {...register('numero_mesa')} type="number" id='numero_mesa' placeholder=' Ingresar número de personas' required />
                            </li>

                            <li className='form__item form__item_reservation'>
                                <button
                                    style={{
                                        background: 'rgb(85, 85, 238)',
                                        width: '100px',
                                        borderRadius: '1em',
                                        margin: 'auto',
                                        marginTop: '10px',
                                    }}
                                >{obtenerData ? 'Modificar' : 'Registrar'}  </button>
                            </li>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormReservacion