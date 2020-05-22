import React from "react"
import Navbar from "./components/Navbar"
import {Switch,Route} from 'react-router-dom'
import IniciarSesion from './pages/IniciarSesion'
import CrearCuenta from './pages/CrearCuenta'

export default function App() {
    return (
        <div className='App'>
            <Navbar />
            <Switch>
                <Route path='/IniciarSesión' component={IniciarSesion} /> 
                <Route path='/CrearCuenta' component={CrearCuenta} /> 
                <Route path='/' component={null} /> 

            </Switch>
        </div>
            
    )
}
