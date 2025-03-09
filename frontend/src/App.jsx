import './App.css'
import ContactoComponent from './components/ContactoComponent'
import CrearDonutComponent from './components/CrearDonutComponent'
import DetalleComponent from './components/DetalleComponent'
import ListadoComponent from './components/ListadoComponent'
import EditarComponent from "./components/EditarComponent"
import store from './core/redux/store/store'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
         <Route path='/' element= {<HomePage/>}/>
         <Route path='/crear-donut' element= {<CrearDonutComponent/>}/>
         <Route path='/contacto' element= {<ContactoComponent/>}/>
         <Route path='/listado' element= {<ListadoComponent/>}/>
         <Route path="/detalle/:id" element={<DetalleComponent />} />
         <Route path="/editar/:id" element={<EditarComponent />} />
      </Routes>
    
    </BrowserRouter>
    </Provider>
     

     
    </>
  )
}

export default App
