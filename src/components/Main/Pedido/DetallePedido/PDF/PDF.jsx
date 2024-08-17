import React from 'react'
import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

import logo from './logo.png'
import useDate from '../../../../../Hooks/useDate'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    section: {
        margin: 10,
        padding: 40,
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        paddingTop: '10px', // Ajusta el espaciado superior
        fontSize: 16, // Reduce el tamaño de fuente
        fontWeight: 'bold'
      },
      title_p: {
        fontSize: 10, // Reduce el tamaño de fuente
        padding: '5px 0', // Ajusta el espaciado
        textAlign: 'center'
      },
      imagen: {
        height: 70, // Reduce el tamaño de la imagen
        alignSelf: 'center',
      },
      name_cliente: {
        fontSize: 10, // Reduce el tamaño de fuente
        padding: 3, // Ajusta el espaciado
      },
      name_RUC: {
        fontSize: 10, // Reduce el tamaño de fuente
        padding: 3, // Ajusta el espaciado
        borderBottom: '1px solid black',
      },
      dni_cliente: {
        fontSize: 10, // Reduce el tamaño de fuente
        padding: 3, // Ajusta el espaciado
        borderBottom: '1px solid black',
      },

    container: {
        fontSize: 12,
        paddingTop: 20,
        paddingBottom: 20,
    },
    header_cant: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 50,
        textAlign: 'center',
        border: '1px solid black',
    },
    header_description: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 400,
        textAlign: 'center',
        border: '1px solid black',

    },
    header_price: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 110,
        textAlign: 'center',
        border: '1px solid black',
    },
    name_cliente_date: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    header_pedidos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header_cant_val: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 50,
        textAlign: 'center',
        border: '1px solid black',
    },
    header_description_val: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 400,
        textAlign: 'center',
        border: '1px solid black',
    },
    header_price_val: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 110,
        textAlign: 'center',
        border: '1px solid black',
    },
    footerTotal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    footer_total: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 110,
        textAlign: 'center',
    },
    footer_total_val: {
        fontSize: 15,
        padding: 5,
        fontWeight: 900,
        width: 98,
        textAlign: 'center',
        border: '1px solid black',
        backgroundColor: 'yellow',
    },


});


const PDF = ({ data }) => {

    // console.log(data);

    const { obtenerFecha } = useDate()

    if (data) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.title}>
                            Restaurante los tronkitos
                        </Text>
                        <Text style={styles.title_p}>
                            Sabores auténticos que deleitan tu paladar en un ambiente acogedor y familiar.
                        </Text>
                        <Image
                            src={logo}
                            style={styles.imagen}
                        />

                        <View style={styles.name_cliente_date}>
                            <Text style={styles.name_cliente}>
                                Cliente: {data.name_cliente}
                            </Text>
                            <Text style={styles.name_cliente}>
                                Fecha: {obtenerFecha(data?.createdAt)}
                            </Text>
                        </View>

                        {
                            data?.dni_cliente.length <= 8 ?
                                <Text style={styles.dni_cliente}>
                                    DNI cliente: {data?.dni_cliente}
                                </Text>
                                :
                                <Text style={styles.name_RUC}>
                                    RUC: {data?.dni_cliente}
                                </Text>
                        }

                        <View style={styles.container}>

                            <View style={styles.header_pedidos}>
                                <Text style={styles.header_cant}>
                                    Cant.
                                </Text >
                                <Text style={styles.header_description}>
                                    Descripción
                                </Text >
                                <Text style={styles.header_price}>
                                    Importe
                                </Text >
                            </View>

                            {
                                data && data.pedidos.map((pedido, index) => (
                                    <View style={styles.header_pedidos} key={index}>
                                        <Text style={styles.header_cant_val}>{pedido.cantidad} </Text>
                                        <Text style={styles.header_description_val}>{pedido.name} </Text>
                                        <Text style={styles.header_price_val}>{pedido.precio} </Text>

                                    </View>
                                ))
                            }


                            <View style={styles.footerTotal}>
                                <Text style={styles.footer_total}> Total </Text>
                                <Text style={styles.footer_total_val}> {data?.precio_total} </Text>
                            </View>

                        </View>

                        <Text style={styles.title_p}>
                            Gracias por su preferencia vuelva pronto...
                        </Text>

                    </View>
                </Page>
            </Document>
        )
    }

}

export default PDF