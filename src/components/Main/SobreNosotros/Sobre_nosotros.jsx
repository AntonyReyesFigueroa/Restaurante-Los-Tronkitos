import React from 'react'

const Sobre_nosotros = () => {
  return (
    <div style={{
      background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://andeangreattreks.com/wp-content/uploads/Delicious-peruvian-foods.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      backgroundRepeat: 'no-repeat',
      height: '100%', // Ajusta la altura según tus necesidades
      width: '100%', // Ajusta el ancho según tus necesidades
      
    }}>
      <section id="reseña-histórica"
        style={{
          padding: '2em'
        }}
      >
        <h2
          style={{ textAlign: 'center', padding: '1em' }}
        >
          Reseña Histórica</h2>
        <p style={{ textAlign: 'justify' }} >
          El restaurante Los Tronkitos fue fundado el 25 de julio de 2019 en Cajamarca. Desde sus inicios, se ha destacado por ofrecer una experiencia gastronómica única y atractiva para sus comensales. Con el paso del tiempo, el restaurante ha logrado ganarse un lugar especial en el corazón de los visitantes locales y turistas.
          Con su ubicación estratégica a solo una cuadra de la plaza de Namora, Los Tronkitos ha sido un destino popular para aquellos que desean disfrutar de la deliciosa cocina cajamarquina. Su compromiso con la calidad y el sabor auténtico ha hecho que el restaurante se destaque entre la competencia.

        </p>

      </section>

      <section
        style={{
          padding: '2em'
        }}
        id="descripción-general">
        <h2
          style={{ textAlign: 'center', padding: '1em' }}
        >Descripción general</h2>
        <p style={{ textAlign: 'justify' }}>
          El Restaurante “Los Tronkitos” es un lugar excepcionalmente ubicado a una cuadra de la plaza de Namora, en Cajamarca. Se destaca por ofrecer una experiencia única en la que se fusiona la exquisita gastronomía cajamarquina, la recreación familiar, la cultura y el turismo. El restaurante cuenta con un amplio ambiente que incluye zonas recreativas para niños, motocross, una canchita de fútbol, exposición de artesanías y hasta la observación de la creación de guitarras. Tienen como compromiso brindar un servicio de alta calidad, superando las expectativas de sus clientes y promoviendo la esencia cultural de Cajamarca a través de la comida, la música y el ambiente acogedor.
        </p>

      </section>



      <section

        style={{
          padding: '2em'
        }}
        id="misión">
        <h2

          style={{ textAlign: 'center', padding: '1em' }}

        >Misión</h2>
        <p style={{ textAlign: 'justify' }}>
          Nuestra misión es deleitar a nuestros comensales con una experiencia culinaria excepcional, fusionando la autenticidad de la gastronomía cajamarquina con un ambiente acogedor, brindando recreación familiar y promoviendo la cultura a través de artesanías y la fabricación de guitarras.
        </p>
      </section>

      <section
        style={{
          padding: '2em'
        }}
        id="visión">
        <h2

          style={{ textAlign: 'center', padding: '1em' }}
        >Visión</h2>
        <p style={{ textAlign: 'justify' }}>
          Ser reconocidos a nivel nacional e internacional por nuestra calidad, autenticidad y servicio excepcional, como un destino gastronómico emblemático que cautiva y supera expectativas.
        </p>
      </section>
    </div>
  )
}

export default Sobre_nosotros