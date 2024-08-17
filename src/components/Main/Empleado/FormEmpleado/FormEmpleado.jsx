import React, { useEffect, useRef, useState } from 'react'
import './FormEmpleado.css'
import fotoEmpleado from '../../../../image/user_img.avif'
import { useForm } from 'react-hook-form';
import useSubirImage from '../../../../Hooks/useSubirImage';
import usePost from '../../../../Hooks/usePost.js'
import usePut from '../../../../Hooks/usePut';

const FormEmpleado = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {

    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/empleado'

    const { register, handleSubmit, reset } = useForm();

    const [empleado, setEmpleado] = useState()

    const { image, btnSubir } = useSubirImage('donzcferh', 'empleados')


    const { updateData } = usePut(URL);

    // const { inputValue, handleInputChange, maxCharacters } = useMaxLengthInput(8)



    const { uploadData, createData } = usePost(URL)

    const submit = data => {
        console.log(obtenerData);
        console.log(image);
        if (obtenerData) {
            
            if(!obtenerData.img){
                data.img = image
            }else if(obtenerData?.img !== image && obtenerData?.img && !image){
                data.img = obtenerData?.img
                getData()
            }else{
                if (obtenerData?.img !== image) {
                    data.img = image
                    getData()
                }else{
                    data.img = obtenerData?.img
                    getData()
                }
                
            }

            updateData(data, obtenerData?.id_empleado)
            setIsOpenModal(false)
            getData()
            setObtenerData(false)
        } else {
            data.img = image
            setEmpleado(data)

            createData(data)
            console.log(uploadData);

            console.log(data);
            setIsOpenModal(false)
            getData()
        }
        getData()
    }

    useEffect(() => {
        if (obtenerData) {
            reset(obtenerData)
        }
    }, [obtenerData])




// console.log(obtenerData.img);


    return (
        <form onSubmit={handleSubmit(submit)} className='form__container'>
            <div className='form'>
                <div className='form__tile'>
                    <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'} Empleado </h3></div>
                    <div className='form__title-x'><h1 onClick={() => setIsOpenModal(!isOpenModal)} style={{ fontFamily: 'arial' }}> x </h1></div>
                </div>
                <div className='form__datos'>

                    <div className='form__datos-foto'>
                        <p>Añadir foto de empleado</p>

                        {
                            image ?

                                <img src={image} alt="Añadir foto de empleado" />
                                :
                                obtenerData ?
                                    <img src={obtenerData.img? obtenerData?.img: fotoEmpleado} alt="Añadir foto " />
                                    :
                                    <img src={fotoEmpleado} alt="Añadir foto de empleado" />
                        }



                        <h6 onClick={btnSubir}>Subir imagen</h6>
                    </div>

                    <div className='form__datos-datos'>

                        <div className='container__datos-datos'>
                            <li className='form__item'>
                                <label htmlFor="name">Nombre de empleado:</label>
                                <input {...register('name')} type="text" id='name' placeholder=' Ingresar nombre' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="email">Ingresar correo:</label>
                                <input {...register('email')} type="email" id='email' placeholder=' Ingresar correo' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="dni">Ingrese DNI:</label>
                                <input
                                    {...register('dni')}
                                    type="number"
                                    name="dni"
                                    id='dni'
                                    placeholder=' Ingresar numero de DNI'
                                    // value={inputValue}
                                    // onChange={handleInputChange}
                                    minLength={8}
                                    required

                                />

                            </li>
                            <li className='form__item'>
                                <label htmlFor="phone">Ingrese Telefono:</label>
                                <input {...register('phone')} type="number" id='phone' placeholder=' Ingresar número de telefono' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="birthday">Fecha de nacimiento:</label>
                                <input
                                    style={{
                                        width: 'max-content'
                                    }}
                                    {...register('birthday')} type="date" id="birthday" name="birthday" required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="address">Dirección:</label>
                                <input {...register('address')} type="text" id='address' placeholder=' Ingresar direción' required />
                            </li>
                            <li className='form__item'>
                                <label>Ingrese cargo:</label>
                            </li>
                            <li

                                className='form__item'>
                                <label>
                                    <input type="radio" {...register('cargo', { required: true })} value="Administrador" />
                                    Administrador
                                </label>
                                <label>
                                    <input type="radio" {...register('cargo', { required: true })} value="Mesero" />
                                    Mesero
                                </label>
                                <label>
                                    <input type="radio" {...register('cargo', { required: true })} value="Cocinero" />
                                    Cocinero
                                </label>
                            </li>
                            <li className='form__item'>
                                <label htmlFor="salary">Ingresar salario:</label>
                                <input {...register('salary')} type="text" id='salary' placeholder=' Ingresar Salario' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="time">Ingresar horario de trabajo:</label>
                                <input {...register('time')} type="text" id='time' placeholder=' Ingresar horario de trabajo' required />
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
                                >{obtenerData ? 'Modificar' : 'Registrar'}  </button>
                            </li>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormEmpleado








    //     <form onSubmit={handleSubmit(submit)} className='form'>
    //     <div onClick={closeForm} className='form_x'>X</div>
    //     <h2 className='form__title'>
    //         {updateInfoPlato ? 'Editar plato' : 'Crear plato'}
    //     </h2>
    //     <ul className='form__list'>
    //         <li className='form__item'>
    //             <label htmlFor="name">Nombre del plato</label>
    //             <input {...register('name')} type="text" id='name' placeholder='Ingresar nombre del plato' required />
    //         </li>
    //         <li className='form__item'>
    //             <label htmlFor="description"> Descripción</label>
    //             <textarea className='label_description'  {...register('description')} type="text" id='description' placeholder='Escriba la descripción del plato' required />
    //         </li>
    //         <li className='form__item'>
    //             <label htmlFor="price">Precio</label>
    //             <input {...register('price')} type="number" id='price' placeholder='Ingresar precio del plato' required />
    //         </li>
    //         <li className='form__item'>
    //             <label htmlFor="time_preparation">Tiempo de preparación</label>
    //             <input {...register('time_preparation')} type="text" id='time_preparation' placeholder='Ingresar tiempo de preparación' required />
    //         </li>

    //         <li className='form__item'>
    //             <div>
    //             <div>
    //             <input
    //                 type="radio"
    //                 value="plato"
    //                 {...register('categories', { required: true })}
    //             />
    //             <label>plato</label>
    //             </div>

    //            <div>
    //            <input
    //                 type="radio"
    //                 value="coctel"
    //                 {...register('categories', { required: true })}
    //             />
    //             <label>cocteles</label>
    //            </div>

    //             <input
    //                 type="radio"
    //                 value="bebida"
    //                 {...register('categories', { required: true })}
    //             />
    //             <label>bebidas</label>
    //             </div>

    //         </li>

    //         <li className='form__item'>
    //             <label htmlFor="image">Imagen </label>
    //             <a className='url_img_drive_platoFrom' target="_blank" href="https://drive.google.com/drive/u/1/folders/1l5Q83mlndXD2KipI6PfhJaz5z6pZXcBz">Subir imagen aqui</a>
    //             <br />
    //             <input {...register('image')} type="text" id='image' required placeholder='Copiar ID de imagen' />
    //         </li>
    //     </ul>
    //     <button className='form__btn'>{updateInfoPlato ? 'Modificar' : 'Crear'}</button>
    // </form>





