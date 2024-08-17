import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import usePost from '../../../Hooks/usePost';
import DetallePedido from './DetallePedido/DetallePedido';
import useDelete from '../../../Hooks/useDelete'
import { FaSearch } from 'react-icons/fa';

const ListaPedidos = ({ infoPedido, precioTotal, setPrecioTotal, pedido, setPedido, setRecuperDataPlato, recuperDataPlato, setInfoPedido, setEstadoEnvioElimar, setObtenerNomDni, obtenerNomDni,
    name_cliente, setName_cliente, nroMesa, setNroMesa, dni, setDni,fecha, setFecha,
    btnListaPedido, setBtnListaPedido,
    booleanCaptarDeDetalle, setbooleanCaptarDeDetalle
}) => {

    const { register, handleSubmit, reset } = useForm();
    const [booleanEnviarPedido, setBooleanEnviarPedido] = useState(false)

    const [buscar, setBuscar] = useState("")

    // console.log(buscar);

   

    const URL = 'https://6490763d1e6aa71680cb4c3b.mockapi.io/api/pedido'


    // const {data, getData} = useGet(URL)
    const { createData } = usePost(URL)
    const { deleteData } = useDelete(URL)




    // console.log(data);

    const fechaActual = new Date().toISOString();
    const IngresarFecha = fechaActual.toString();

    // console.log(IngresarFecha);

    // console.log(pedido);
    // console.log(obtenerNomDni);


    // console.log(obtenerNomDni);

    // console.log(booleanCaptarDeDetalle);

    // console.log(infoPedido);



    const submit = data => {

        if (pedido.length !== 0 && data && pedido) {

            if (obtenerNomDni) {
                data.name_cliente = name_cliente
                data.mesa = nroMesa
                data.dni_cliente = dni
            }
            // deleteData(obtenerNomDni.id_pedido)

            data.precio_total = precioTotal
            data.createdAt = IngresarFecha
            // console.log(pedido);
            data.pedidos = pedido

            createData(data)

            if (obtenerNomDni) {
                deleteData(obtenerNomDni)
                setBtnListaPedido('agregar')
                setbooleanCaptarDeDetalle(false)
                // console.log(obtenerNomDni);
            }
            // console.log(data);
            reset()

            setEstadoEnvioElimar(true)
            setInfoPedido([])
            setBooleanEnviarPedido(!booleanEnviarPedido)
            setName_cliente('');
            setDni('')
            setPrecioTotal(0)

            setNroMesa('')
            setObtenerNomDni({})
            setPedido({})
        } else {
            alert('No se ah selecionado ningun plato para hacer el pedido')
        }

    }
    // console.log(name_cliente);

    const handleChangename = (event) => {
        setName_cliente(event.target.value);

    };

    const handleChangdni = (event) => {
        setDni(event.target.value)
    };

    const handleChangenromesa = (event) => {
        setNroMesa(event.target.value)
    };

    const eventoCancelarPedido = () => {
        reset()

        setEstadoEnvioElimar(true)
        setInfoPedido([])
        setBooleanEnviarPedido(!booleanEnviarPedido)
        setName_cliente('');
        setDni('')
        setPrecioTotal(0)
        setNroMesa('')
        setObtenerNomDni({})
        setPedido({})
        setBtnListaPedido('agregar')
        setbooleanCaptarDeDetalle(false)
    }


    useEffect(() => {
        if (obtenerNomDni) {
            // setName_cliente(obtenerNomDni.name_cliente)
            // setNroMesa(obtenerNomDni.mesa)
            // setDni(obtenerNomDni.dni_cliente)

        }




        // console.log(obtenerNomDni);

    }, [booleanEnviarPedido])

    // console.log(obtenerNomDni);



    const handleInputChange = (event) => {
        const nuevoTexto = event.target.value;
        setBuscar(nuevoTexto);
      };

      const [btnBuscaFecha, setBtnBuscaFecha] = useState(false)


    return (
        <div>

            <div className='buscador__input'>
               {
                btnBuscaFecha?
                <input type="date" placeholder='Busqueda de pedido'
                onChange={handleInputChange}
                />
                :
                <input type="text" placeholder='Busqueda de pedido'
                onChange={handleInputChange}
                />
               }
                <FaSearch className='buscador__icono' />
            </div>

          
                <button onClick={() => setBtnBuscaFecha(!btnBuscaFecha)}  style={{width:'200px', padding:'1em', display:'flex', justifyContent:'center', margin:'auto', marginTop:'1em'}}>Buscar por fecha</button>
           

            <h3 className='title_lista_pedidos'>Lista de pedidos</h3>
            <div className='contenedor_pedidos' >
                {
                    infoPedido?.length > 0 ?
                        infoPedido && infoPedido.map((data, index) => (
                            <div key={index}>
                                {
                                    data.cantidad !== 0 ?
                                        <div className='lista_paltos'>
                                            <b className='nombre_plato_pedido'> {data.nombre} :</b>
                                            <p className='precio_cantidad_pedido' > {data.cantidad} </p>
                                            <p className='precio_cantidad_pedido' > s/{data.precio} </p>
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                        ))
                        :
                        <h1 style={{ color: '#fff', textAlign: 'center' }}>No hay pedidos</h1>
                }

            </div>
            <h3 className='tile_precio_pagar_total'>Precio Total a pagar: s/ {precioTotal} </h3>

            <form className='form__pedido' onSubmit={handleSubmit(submit)}>


                <li className='form__item_pedido'>
                    <label htmlFor="name_cliente">Ingresar nombre del cliente:</label>
                    <input {...register('name_cliente')} onChange={handleChangename} value={name_cliente} type="text" id='name_cliente' placeholder=' Ingresar nombre del cliente' required />
                </li>
                <li className='form__item_pedido'>
                    <label htmlFor="number_mesa">Ingresar numero de mesa :</label>
                    <input {...register('mesa')} onChange={handleChangenromesa} value={nroMesa} type="number" id='number_mesa' placeholder=' Ingresar número de mesa' required />
                </li>

                <li className='form__item_pedido'>
                    <label htmlFor="dni_cliente">Ingresar DNI o RUC del cliente :</label>
                    <input {...register('dni_cliente')} onChange={handleChangdni} value={dni} type="number" id='dni_cliente' placeholder=' Ingresar DNI o RUC cliente' required />
                </li>


                {
                    btnListaPedido === 'agregar' ?
                        <div className='container__btnpedido'><button
                            onClick={() => setBooleanEnviarPedido(!booleanEnviarPedido)}
                            className='btn_pedido'> <h2>Agregar pedido</h2></button>
                        </div>
                        :
                        <div className='container__btnpedido'>
                            <button
                                onClick={() => setBooleanEnviarPedido(!booleanEnviarPedido)}
                                className='btn_pedido'> <h2>Modificar</h2>
                            </button>
                            <button
                                onClick={eventoCancelarPedido}
                                className='btn_pedido'> <h2>Cancelar</h2>
                            </button>
                        </div>
                }
            </form>

            <div className='container__detallePedio '>
                <DetallePedido
                    pedido={pedido}
                    setBooleanEnviarPedido={setBooleanEnviarPedido}
                    booleanEnviarPedido={booleanEnviarPedido}
                    setRecuperDataPlato={setRecuperDataPlato}
                    setInfoPedido={setInfoPedido}
                    setObtenerNomDni={setObtenerNomDni}
                    setPedido={setPedido}
                    setName_cliente={setName_cliente}
                    setNroMesa={setNroMesa}
                    setDni={setDni}
                    setFecha={setFecha}
                    btnListaPedido={btnListaPedido}
                    setBtnListaPedido={setBtnListaPedido}
                    setPrecioTotal={setPrecioTotal}
                    booleanCaptarDeDetalle={booleanCaptarDeDetalle}
                    setbooleanCaptarDeDetalle={setbooleanCaptarDeDetalle}
                    buscar={buscar}
                />
            </div>



        </div>
    )
}

export default ListaPedidos