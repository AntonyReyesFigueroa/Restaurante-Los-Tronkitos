import React, { useEffect, useState } from 'react'

const Coctel = ({ data, setInfoPedido, infoPedido, setEstadoBtnPedido, estadoBtnPedido, recuperDataPlato, setRecuperDataPlato, estadoEnvioElimar, setEstadoEnvioElimar,
    booleanCaptarDeDetalle, setbooleanCaptarDeDetalle
}) => {


    const [cant, setCant] = useState(0)
    const [pedidoPlato, setPedidoPlato] = useState({})
    const [cantiBoolean, setCantiBoolean] = useState(false)

    const mas = () => {
        setCant(cant + 1)
        llenarDatoPlato();
    }

    const menos = () => {
        cant > 0 ?
            setCant(cant - 1)
            :
            setCant(0);

        llenarDatoPlato();
    }



console.log(data);


    useEffect(() => {

        llenarDatoPlato();

       

        const dataPlato = {
            id: data?.id,
            nombre: data?.nombre,
            cantidad: 0,
            precio: data?.precioUnitario,
            categoria: data?.categoria
        }


        recuperDataPlato.map(arr =>{
            if(arr.id === data.id && arr.cantidad>0){
                // console.log(arr.id);
                // console.log(data.id_plato);
                infoPedido[data.id -1] = arr
            }else{
                
            }
            
        })


        setRecuperDataPlato(infoPedido)



        
        
        if (booleanCaptarDeDetalle) {

            // console.log(recuperDataPlato);

            recuperDataPlato.map(arr => {

                if (arr.name === data.nombre) {
                    // console.log(arr.name);
                    // console.log(data.name);
                    // console.log(arr.cantidad);
                    setCant(arr.cantidad)
                    // setbooleanCaptarDeDetalle(false)
                    // setInfoPedido([])
                }


            })

            setbooleanCaptarDeDetalle(false)

        } 
    
    }, [booleanCaptarDeDetalle])
    





    const llenarDatoPlato = () => {

        
        // console.log('cantBoolean: '+cantiBoolean);

        const dataPlato = {
            id: data?.id,
            nombre: data?.nombre,
            cantidad: cant,
            precio: data?.precioUnitario,
            categoria: data?.categoria
        }

        setCantiBoolean(true)




        if (booleanCaptarDeDetalle) {

            // console.log(recuperDataPlato);

            setInfoPedido([])



        } else {

            if (cant === 0 && cantiBoolean === false && !estadoEnvioElimar) {
                setInfoPedido(recuperDataPlato)

                if (recuperDataPlato[data.id - 1]?.cantidad) {
                    setCant(recuperDataPlato[data.id - 1]?.cantidad)
                }

            } else {
                infoPedido[data.id - 1] = dataPlato
                // console.log(recuperDataPlato);
            }

        }

        setEstadoEnvioElimar(false)


        // console.log(recuperDataPlato[data.id_plato - 1]?.cantidad );


        // console.log('value[' + data?.id_plato + ']' + cantidadPlatos);

        // setInfoPedido(cantidadPlatos)
    }



    useEffect(() => {
        llenarDatoPlato()

    }, [cant])

    // console.log(cant);
    // console.log(infoPedido);

    //    console.log(pedidoPlato);





    return (
       data.categoria === 'Coctel'?
       <article className='plato'
       style={
           {
               display: 'flex',
               gap: '20px',
               justifyContent: 'center',
               margin: '1em',
               alignContent: 'center'
           }
       }
   >
       <div className='plato_detalle'>
           <div className="empleado__tilte">
               <h3>{data.nombre}</h3>
           </div>

           <div className='container_empleado-info'>
               <div className='empleado__img'>
                   {
                       data.imagen ?
                           <img src={data.imagen} alt={data.name} />
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
                       <b>Precio: </b>
                       <p>{data.precioUnitario} </p>
                   </div>

                   {/* {
                       data?.category !== 'Bebida' ?
                           <div className="empleado__info-datos">
                               <b>Tiempo de preparación: </b>
                               <p>{data.time_preparation} </p>
                           </div>
                           :
                           <div></div>
                   } */}



                   <div className="empleado__info-datos">
                       <b>Categoria: </b>
                       <p>{data.categoria} </p>
                   </div>


               </div>
           </div>

           <div className="btn_Pedidos">
               <div onClick={() => {
                   menos()
                   setEstadoBtnPedido(!estadoBtnPedido)
               }} className='btn__pedido-btn'><h1>-</h1></div>
               <div className='btn__pedido-btn'><h1> {cant} </h1></div>
               <div onClick={() => {
                   mas()
                   setEstadoBtnPedido(!estadoBtnPedido)
               }} className='btn__pedido-btn'><h1>+</h1></div>

           </div>
       </div>

   </article >
   :
   ''
    )
}

export default Coctel