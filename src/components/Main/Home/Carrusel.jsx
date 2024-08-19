import React, { useEffect, useState } from 'react'
import './Carrusel.css'
const Carrusel = ({ data }) => {

    const [startX, setStartX] = useState()
    const [scrollLeft, setScrollLeft] = useState()
    const [currentIndex, setCurrentIndex] = useState(0)

    const carrusel = document.querySelector('.carrusel');

    // Variables para rastrear el desplazamiento
    // let startX;
    // let scrollLeft;
    // Variables para rastrear el índice actual del elemento
    // let currentIndex = 0;

    // Agrega un evento de mousedown al elemento carrusel
    carrusel && carrusel.addEventListener('mousedown', (e) => {
        // Guarda la posición inicial del clic
        setStartX(e.pageX - carrusel.offsetLeft);
        // startX = e.pageX - carrusel.offsetLeft;
        // Guarda la posición inicial del desplazamiento horizontal
        setScrollLeft(carrusel.scrollLeft);
        // scrollLeft = carrusel.scrollLeft;
    });

    // Agrega un evento de mouseup al elemento carrusel
    carrusel && carrusel.addEventListener('mouseup', () => {
        // Restablece las variables de rastreo del desplazamiento
        setStartX(null);
        // startX = null;
        setScrollLeft(null);
        // scrollLeft = null;
    });

    // Agrega un evento de mousemove al elemento carrusel
    carrusel && carrusel.addEventListener('mousemove', (e) => {
        // Verifica si se ha hecho clic y se ha desplazado el mouse
        if (!startX) return;
        // Evita el comportamiento predeterminado del evento de arrastre del mouse
        e.preventDefault();
        // Calcula la distancia recorrida desde el punto de inicio
        const x = e.pageX - carrusel.offsetLeft;
        const walk = (x - startX) * 2;
        // Realiza el desplazamiento horizontal
        carrusel.scrollLeft = scrollLeft - walk;
    });

    // Función para mover al siguiente elemento
    function moveToNext() {
        // Incrementa el índice actual
        setCurrentIndex(currentIndex+1);
        // currentIndex++;
        // Verifica si alcanzaste el final del carrusel y vuelve al principio
        if (currentIndex >= data.length) {
            setCurrentIndex(0)
            // currentIndex = 0;
        }
        // Calcula el desplazamiento horizontal para el elemento actual
        const scrollLeft = carrusel && carrusel.clientWidth * currentIndex;
        // Realiza el desplazamiento horizontal animado
        carrusel && carrusel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }



    useEffect(() => {
        // Intervalo para mover automáticamente cada 3 segundos (ajusta el tiempo según tus necesidades)
        setInterval(moveToNext, 1000);
    }, [currentIndex])


    return (
        <div className='carrusel__container'>
            <div className="carrusel">


                {
                    data && data.map((data, i) => (
                        <div key={i} className="elemento">
                            <img src={data.imagen} alt={data.nombre} />
                        </div>

                    ))
                }



            </div>
        </div>
    )
}

export default Carrusel