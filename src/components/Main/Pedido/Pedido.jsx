import React, { useEffect, useState } from 'react'
import './Pedido.css'
import useGet from '../../../Hooks/useGet'
import usePost from '../../../Hooks/usePost'
import Plato from './Plato/Plato'
import Coctel from './Coctel/Coctel'
import Bebida from './Bebida/Bebida'
import DetallePedido from './DetallePedido/DetallePedido'
import { useForm } from 'react-hook-form';
import ListaPedidos from './ListaPedidos'


const Pedido = () => {



    const URL = 'https://66bf552c42533c403145d9af.mockapi.io/platos'
    const { data, getData } = useGet(URL)
    const [categoryPlato, setCategoryPlato] = useState('Plato')
    const [infoPedido, setInfoPedido] = useState([])
    const [estadoBtnPedido, setEstadoBtnPedido] = useState(false)

    const [recuperDataPlato, setRecuperDataPlato] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [pedido, setPedido] = useState()
    const [ayudaPedido, setAyudaPedido] = useState([])
    const [estadoEnvioElimar, setEstadoEnvioElimar] = useState(false)

    const [obtenerNomDni, setObtenerNomDni] = useState({})

    const [name_cliente, setName_cliente] = useState('')
    const [nroMesa, setNroMesa] = useState('')
    const [dni, setDni] = useState('')
    const [fecha, setFecha] = useState('')



    const [btnListaPedido, setBtnListaPedido] = useState('agregar')

    const [booleanCaptarDeDetalle, setbooleanCaptarDeDetalle] = useState(false)

    const [recuperDataModificar, setRecuperDataModificar] = useState([])











    // console.log(data);

    // console.log(recuperDataPlato);
    // console.log(data);

    useEffect(() => {
        getData()
    }, [])



    useEffect(() => {






        setRecuperDataPlato(infoPedido)

        // console.log(estadoEnvioElimar);




        if (recuperDataPlato?.length > 0) {

            setAyudaPedido([])

            recuperDataPlato && recuperDataPlato.map(data => {

                if (data.cantidad !== 0) {
                    ayudaPedido.push(data)

                }

            })
        }

        setPedido(ayudaPedido)
        // console.log(pedido);


        let precioPlato = 0
        let iniciarConteoPrecioPlato = 0
        recuperDataPlato && recuperDataPlato?.map(data => {

            precioPlato = data.precio * data.cantidad
            iniciarConteoPrecioPlato = precioPlato + iniciarConteoPrecioPlato
            setPrecioTotal(iniciarConteoPrecioPlato)
        })

    }, [estadoBtnPedido])

    // console.log(recuperDataPlato);
    //   console.log(precioTotal);
    // console.log(ayudaPedido);
    // console.log(pedido);



    return (
        <div>

            <div className='Carta_nav_container'>
                <ul className='Carta_nav_container  container__pedido-ul'>
                    <li onClick={() => {
                        setCategoryPlato('Plato')
                        setEstadoBtnPedido(!estadoBtnPedido)
                    }} className='header_pedido-li'>Platos</li>
                    <li onClick={() => {
                        setCategoryPlato('Coctel')
                        setEstadoBtnPedido(!estadoBtnPedido)
                    }} className='header_pedido-li'>Cocteles</li>
                    <li onClick={() => {
                        setCategoryPlato('Bebida')
                        setEstadoBtnPedido(!estadoBtnPedido)
                    }} className='header_pedido-li'>Bebidas</li>
                    <li onClick={() => setCategoryPlato('Lista de pedidos')} className='header_pedido-li'>Lista de Pedidos</li>
                </ul>
            </div>

            <div className='container__pedido'>
                {


                    categoryPlato === 'Plato' ?

                        data && data.map(data => (
                            <Plato
                                key={data.id}
                                data={data}
                                setInfoPedido={setInfoPedido}
                                infoPedido={infoPedido}
                                setEstadoBtnPedido={setEstadoBtnPedido}
                                estadoBtnPedido={estadoBtnPedido}
                                recuperDataPlato={recuperDataPlato}
                                setRecuperDataPlato={setRecuperDataPlato}
                                setEstadoEnvioElimar={setEstadoEnvioElimar}
                                estadoEnvioElimar={estadoEnvioElimar}
                                booleanCaptarDeDetalle={booleanCaptarDeDetalle}
                                setbooleanCaptarDeDetalle={setbooleanCaptarDeDetalle}
                            />

                        ))

                        : categoryPlato === 'Coctel' ?
                            data && data.map(data => (
                                <Coctel
                                    key={data.id}
                                    data={data}
                                    setInfoPedido={setInfoPedido}
                                    infoPedido={infoPedido}
                                    setEstadoBtnPedido={setEstadoBtnPedido}
                                    estadoBtnPedido={estadoBtnPedido}
                                    recuperDataPlato={recuperDataPlato}
                                    setRecuperDataPlato={setRecuperDataPlato}
                                    setEstadoEnvioElimar={setEstadoEnvioElimar}
                                    estadoEnvioElimar={estadoEnvioElimar}
                                    booleanCaptarDeDetalle={booleanCaptarDeDetalle}
                                    setbooleanCaptarDeDetalle={setbooleanCaptarDeDetalle}
                                />

                            ))
                            : categoryPlato === 'Bebida' ?
                                data && data.map(data => (
                                    <Bebida
                                        key={data.id}
                                        data={data}
                                        setInfoPedido={setInfoPedido}
                                        infoPedido={infoPedido}
                                        setEstadoBtnPedido={setEstadoBtnPedido}
                                        estadoBtnPedido={estadoBtnPedido}
                                        recuperDataPlato={recuperDataPlato}
                                        setRecuperDataPlato={setRecuperDataPlato}
                                        setEstadoEnvioElimar={setEstadoEnvioElimar}
                                        estadoEnvioElimar={estadoEnvioElimar}
                                        booleanCaptarDeDetalle={booleanCaptarDeDetalle}
                                        setbooleanCaptarDeDetalle={setbooleanCaptarDeDetalle}
                                    />

                                ))
                                : categoryPlato === 'Lista de pedidos' ?
                                    <ListaPedidos
                                        key={data.id}
                                        infoPedido={infoPedido}
                                        pedido={pedido}
                                        precioTotal={precioTotal}
                                        setPrecioTotal={setPrecioTotal}
                                        setPedido={setPedido}
                                        setRecuperDataPlato={setRecuperDataPlato}
                                        recuperDataPlato={recuperDataPlato}
                                        setInfoPedido={setInfoPedido}
                                        setEstadoEnvioElimar={setEstadoEnvioElimar}
                                        obtenerNomDni={obtenerNomDni}
                                        setObtenerNomDni={setObtenerNomDni}
                                        name_cliente={name_cliente}
                                        setName_cliente={setName_cliente}
                                        nroMesa={nroMesa}
                                        setNroMesa={setNroMesa}
                                        dni={dni}
                                        setDni={setDni}
                                        fecha={fecha}
                                        setFecha={setFecha}
                                        btnListaPedido={btnListaPedido}
                                        setBtnListaPedido={setBtnListaPedido}
                                        booleanCaptarDeDetalle={booleanCaptarDeDetalle}
                                        setbooleanCaptarDeDetalle={setbooleanCaptarDeDetalle}
                                    />

                                        :
                                        null

                }

            </div>

        </div>
    )
}

export default Pedido   