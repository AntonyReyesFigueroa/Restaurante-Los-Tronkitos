import React, { useState } from 'react'
import useGet from '../../../../Hooks/useGet'
import useDate from '../../../../Hooks/useDate'
import './DetallePedido.css'
import { useEffect } from 'react'

import useDelete from '../../../../Hooks/useDelete'
import GenerarPDF from './PDF/GenerarPDF'

const DetallePedido = ({ pedido, setBooleanEnviarPedido, booleanEnviarPedido, setRecuperDataPlato, setInfoPedido, setObtenerNomDni, setPedido,
  setName_cliente, setNroMesa, setDni, setFecha,
  setBtnListaPedido, setPrecioTotal,
  booleanCaptarDeDetalle, setbooleanCaptarDeDetalle,
  buscar
}) => {

  const URL = 'https://6490763d1e6aa71680cb4c3b.mockapi.io/api/pedido'

  const { deleteData } = useDelete(URL)

  const { data, getData } = useGet(URL)

  const { obtenerFecha, obtenerHorasMinutos } = useDate()

  const [dataInverso, setDataInverso] = useState([])

  const [auxData, setAuxData] = useState([])

  const [booleanBoleta, setBooleanBoleta] = useState(false)


  const [capturarPedido, setCapturarPedido] = useState({})

  const eliminaPedido = (dataEliminar) => {
    // console.log(dataEliminar.id_pedido);





    var resultado = window.confirm(`Estas seguro de eliminar el pedido de ${dataEliminar?.name_cliente}`);
    if (resultado === true) {

      deleteData(dataEliminar.id_pedido)

      window.alert(`El pedido de ${dataEliminar.name_cliente} se ah eliminado correctamente`);


    } else {
      window.alert(`El pedido de ${dataEliminar.name_cliente} no fue eliminado`);
    }




    // getData()
  }


  const visualizarPdfFunction = (infoPedido) => {
    setCapturarPedido(infoPedido)
  }

  const obtenerPedidoDetallePedido = (infoPedido) => {

    // console.log(infoPedido);
    setbooleanCaptarDeDetalle(true)
    // console.log(booleanCaptarDeDetalle);


    if (infoPedido) {
      setInfoPedido(infoPedido.pedidos)

      

      setRecuperDataPlato(infoPedido.pedidos)
      setObtenerNomDni(infoPedido.id_pedido)
      setPedido(infoPedido.pedidos)

      setName_cliente(infoPedido.name_cliente)
      setNroMesa(infoPedido?.mesa)
      setDni(infoPedido.dni_cliente)
      setFecha(infoPedido)

      setBtnListaPedido('modificar')
      setPrecioTotal(infoPedido.precio_total)

      if (infoPedido.precio_total === 0) {
        // console.log('es cero');

      }

    }

  }



  useEffect(() => {

    setAuxData([])

    data && data.map((arr, index) => {
      auxData[index] = arr.pedidos
    })

    // setAuxData()
    // console.log(auxData);

    auxData.map((arr, index) => {
      // console.log(arr)
    })


    data && setDataInverso(data.reverse())


  }, [data])



  useEffect(() => {


    getData()
    getData()
    // console.log(pedido);
  }, [booleanEnviarPedido])


  // console.log(pedido);


  const fechaActual = new Date().toISOString();
  const IngresarFecha = fechaActual.toString();

  // console.log(IngresarFecha);



  // console.log(obtenerFecha);

  const [visualizarPdf, setVisualizarPdf] = useState(false)

  if (dataInverso) {
    return (
      <div className='container__general-Detallepedido'>




        {
          visualizarPdf ?
            <div style={{
              top: 0,
              zIndex: 1,
              left: 0,
              position: 'fixed',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backdropFilter: 'blur(3px)',
            }}>
              <div
                style={{
                  background: 'black',
                  width: '95%',
                  minWidth: '270px',
                  maxWidth: '900px',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 'auto',
                  color: 'white',
                  flexDirection: 'column',
                  position: 'fixed',
                  padding: '1em',
                  borderRadius: '1em'
                }}
              >
                <div>
                  <h2 onClick={() => setVisualizarPdf(!visualizarPdf)} style={{ fontFamily: 'cursive', display: 'block', textAlign: 'end', paddingRight: '20px', cursor: 'pointer' }}>X</h2>
                </div>
                <GenerarPDF
                  setVisualizarPdf={setVisualizarPdf}
                  data={capturarPedido}
                />

              </div>
            </div>
            :
            null
        }




        {

          dataInverso && dataInverso.map(data => {
            return <div key={data.id_pedido}>
              {

                (obtenerFecha(data?.createdAt) === obtenerFecha(IngresarFecha)) &&
                  (buscar === '' || buscar?.toLowerCase() === data.name_cliente?.toLowerCase()
                    || buscar === obtenerFecha(data?.createdAt) ||
                    buscar === data.dni_cliente) ?
                  <article className='conatiner__detallePedido'>
                    <div className='nombre_detallePedido'><h2>Nombre :{data.name_cliente} </h2></div>
                    <div className='fecha_nroMesa_pedidodetalle'>
                      <div>DNI : {data.dni_cliente} </div>
                      <div>Fecha : {obtenerFecha(data?.createdAt)}</div>
                      <div>Hora :{obtenerHorasMinutos(data?.createdAt)} </div>
                      <div>Numero de mesa:{data.mesa} </div>
                      <div>Precio total : {data.precio_total} </div>
                    </div>
                    <div className='detalle_pedio_title'>
                      <h3>Pedido :</h3>
                      <div className='container_lista_paltosPedido'>
                        {
                          data.pedidos?.map((data, index) => (
                            <div key={index} className='lista_paltos'>
                              <b className='nombre_plato_pedido'> {data.nombre} :</b>
                              <p className='precio_cantidad_pedido' > {data.cantidad} </p>
                              <p className='precio_cantidad_pedido' > s/{data.precio} </p>
                            </div>
                          ))
                        }
                      </div>

                    </div>

                    <div className='btn_Modificar_detalle_pedido'>

                      <button onClick={() => {
                        setBooleanEnviarPedido(!booleanEnviarPedido)
                        eliminaPedido(data)
                      }}>Eliminar</button>

                      <button onClick={() => {
                        setBooleanEnviarPedido(!booleanEnviarPedido)
                        obtenerPedidoDetallePedido(data)
                      }

                      } >Modificar</button>


                      <button
                        onClick={() => {
                          setVisualizarPdf(!visualizarPdf)
                          visualizarPdfFunction(data)
                        }

                        }>Boleta o factura</button>

                    </div>

                  </article>
                  :
                  buscar?.toLowerCase() === data.name_cliente?.toLowerCase()
                    || buscar === obtenerFecha(data?.createdAt) ||
                    buscar === data.dni_cliente ?
                    <article className='conatiner__detallePedido'>
                      <div className='nombre_detallePedido'><h2>Nombre :{data.name_cliente} </h2></div>
                      <div className='fecha_nroMesa_pedidodetalle'>
                        <div>DNI : {data.dni_cliente} </div>
                        <div>Fecha : {obtenerFecha(data?.createdAt)}</div>
                        <div>Hora :{obtenerHorasMinutos(data?.createdAt)} </div>
                        <div>Numero de mesa:{data.mesa} </div>
                        <div>Precio total : {data.precio_total} </div>
                      </div>
                      <div className='detalle_pedio_title'>
                        <h3>Pedido :</h3>
                        <div className='container_lista_paltosPedido'>
                          {
                            data.pedidos?.map((data, index) => (
                              <div key={index} className='lista_paltos'>
                                <b className='nombre_plato_pedido'> {data.name} :</b>
                                <p className='precio_cantidad_pedido' > {data.cantidad} </p>
                                <p className='precio_cantidad_pedido' > s/{data.precio} </p>
                              </div>
                            ))
                          }
                        </div>

                      </div>

                      <div className='btn_Modificar_detalle_pedido'>

                        <button onClick={() => {
                          setBooleanEnviarPedido(!booleanEnviarPedido)
                          eliminaPedido(data)
                        }}>Eliminar</button>
                        <button
                          onClick={() => {
                            setVisualizarPdf(!visualizarPdf)
                            visualizarPdfFunction(data)
                          }

                          }>Boleta o factura</button>

                      </div>

                    </article>
                    :
                    buscar === 'todo' ?
                      <article className='conatiner__detallePedido'>
                        <div className='nombre_detallePedido'><h2>Nombre :{data.name_cliente} </h2></div>
                        <div className='fecha_nroMesa_pedidodetalle'>
                          <div>DNI : {data.dni_cliente} </div>
                          <div>Fecha : {obtenerFecha(data?.createdAt)}</div>
                          <div>Hora :{obtenerHorasMinutos(data?.createdAt)} </div>
                          <div>Numero de mesa:{data.mesa} </div>
                          <div>Precio total : {data.precio_total} </div>
                        </div>
                        <div className='detalle_pedio_title'>
                          <h3>Pedido :</h3>
                          <div className='container_lista_paltosPedido'>
                            {
                              data.pedidos?.map((data, index) => (
                                <div key={index} className='lista_paltos'>
                                  <b className='nombre_plato_pedido'> {data.name} :</b>
                                  <p className='precio_cantidad_pedido' > {data.cantidad} </p>
                                  <p className='precio_cantidad_pedido' > s/{data.precio} </p>
                                </div>
                              ))
                            }
                          </div>

                        </div>

                        <div className='btn_Modificar_detalle_pedido'>

                          <button onClick={() => {
                            setBooleanEnviarPedido(!booleanEnviarPedido)
                            eliminaPedido(data)
                          }}>Eliminar</button>
                          <button
                            onClick={() => {
                              setVisualizarPdf(!visualizarPdf)
                              visualizarPdfFunction(data)
                            }

                            }>Boleta o factura</button>

                        </div>

                      </article>
                      :
                      ''

              }

            </div>
          })
        }
      </div>
    )
  } else {
    return (
      <h1>Cargando pedidos ...</h1>
    )
  }

}

export default DetallePedido