import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React from 'react'
import PDF from './PDF';
import { isMobile } from 'react-device-detect';
import useDate from '../../../../../Hooks/useDate';


const GenerarPDF = ({ data, setVisualizarPdf }) => {

    const { obtenerFecha } = useDate()


    if (isMobile) {
        return (
            <div>

<PDFDownloadLink document={<PDF data={data} />} fileName={`Pedido - ${data?.name_cliente} - ${obtenerFecha(data?.createdAt)} `}>
                    {({ blob, url, loading, error }) =>
                        loading ? 'Cargando documento...' : 'Descargar documento'
                    }
                </PDFDownloadLink>
            </div>
        )
    } else {
        return (
            <div>
                <PDFViewer width="98%" height="450px">
                    <PDF data={data}/>
                </PDFViewer>

                <PDFDownloadLink document={<PDF data={data} />} fileName={`Pedido - ${data?.name_cliente} - ${obtenerFecha(data?.createdAt)} `}>
                    {({ blob, url, loading, error }) =>
                        loading ? 'Cargando documento...' : 'Descargar documento'
                    }
                </PDFDownloadLink>
            </div>
        )
    }


}

export default GenerarPDF