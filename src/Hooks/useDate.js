import moment from 'moment';


const useDate = () => {


    const obtenerFecha = (fecha) => {
        return moment(fecha).format("YYYY-MM-DD");
    }

    const obtenerHorasMinutos = (fecha) => {
        return moment(fecha).format("HH:mm");
    }
   
   

    // const obtenerHorasMinutos = (fecha) => {

    //     const dateObject = new Date(fecha);

    //     const hours = dateObject.getHours();
    //     const minutes = dateObject.getMinutes();
    //     const horaMinutos = hours + ":" + minutes
    //     console.log(horaMinutos);
    //     return horaMinutos

    //     // return moment(fecha).format("HH:mm");
    // }


  return {obtenerFecha, obtenerHorasMinutos}
}

export default useDate