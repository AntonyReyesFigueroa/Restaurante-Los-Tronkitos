import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import ProtectedRoutes from './components/ProtectedRoutes'
import Reseña from './components/Main/Reseña/Reseña'
import Empleado from './components/Main/Empleado/Empleado'
import Error404 from './components/Error404'
import Carta from './components/Main/Carta/Carta'
import Reservaciones from './components/Main/Reservaciones/Reservaciones'
import Plato from './components/Main/Carta/Platos/Plato'
import Coctel from './components/Main/Carta/Coctel/Coctel'
import Bebida from './components/Main/Carta/Bebidas/Bebida'
import ListaPedido from './components/Main/Carta/ListaPedido/ListaPedido'
import VerCarta from './components/Main/Carta/VerCarta'
import VerPlato from './components/Main/Carta/Platos/VerPlato'
import VerCoctel from './components/Main/Carta/Coctel/VerCoctel'
import VerBebida from './components/Main/Carta/Bebidas/VerBebida'
import Pedido from './components/Main/Pedido/Pedido'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='container__app'>

        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        <main onClick={() => setIsOpen(false)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
            <Route path='/ver-carta' element={<VerCarta />} />
            <Route path='/ver-Platos' element={<VerPlato />} />
            <Route path='/ver-Cocteles' element={<VerCoctel />} />
            <Route path='/ver-Bebidas' element={<VerBebida />} />
            <Route path='/*' element={<Error404 />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='/reseña' element={<Reseña />} />
              <Route path='/empleado' element={<Empleado />} />
              <Route path='/agregar' element={<Carta />} />
              <Route path='/reservaciones' element={<Reservaciones />} />
              <Route path='/agregar/Platos' element={<Plato />} />
              <Route path='/agregar/Cocteles' element={<Coctel />} />
              <Route path='/agregar/Bebidas' element={<Bebida />} />
              <Route path='/agregar/Lista-Pedidos' element={<ListaPedido />} />
              <Route path='/pedido' element={<Pedido />} />
            </Route>

            {/* <Route path='/' element={<Home />} />
<Route path='/Sobre-Nosotros' element={<SobreNosotros />} />
<Route path='/Carta' element={<Carta />} />
<Route path='/Login' element={<Login />} />

<Route path='/*' element={<Error />} /> */}

            {/* <Route element={<ProtectedRoutes />}>
              <Route path='/Reservaciones' element={<Reservaciones />} />
              <Route path='/Reseña' element={<Reseña />} />
              <Route path='/Empleado' element={< Empleado />} />
            </Route> */}
            {/* <Route element={<ProtectedRoutes />} >
    <Route path='/Empleado' element={<Empleado />} /> */}
            {/* <Route path='/pokedex/:name' element={<PokemonDetails />} /> */}
            {/* </Route> */}
          </Routes>


        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App
