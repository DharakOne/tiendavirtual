import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import {Menu,AccountCircleRounded,Alarm,ShoppingCart,People} from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "#eb6383"
    },
    root: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0px",
        margin: "0px"
    },

    link: {
        color: "white",
        padding: "7px 8px",
        borderRadius: "10%",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.06)",
            textDecoration: 'none',
        },
        fontSize: "2.5ex",
        fontWeight: "550",
        '&:active': {
            background: "rgba(0, 0, 0, 0.1)"
        }
    }
}));

export default function NavBar() {
    const style = useStyles();

    return (<div className={style.appBar}>
        <header className={style.root} >
            <Link className={style.link} to="/" component={RouterLink} 
             > Mi Tienda </Link>
            <nav>
                <ul className={style.root} >
                    <Link className={style.link} to="/Carrito" component={RouterLink}  ><ShoppingCart/> Carrito</Link>
                    <Link className={style.link}  to="/Horario" component={RouterLink}><Alarm/> Horario</Link>
                    <Link className={style.link} to="/IniciarSesión" component={RouterLink}><AccountCircleRounded/> Iniciar Sesión </Link>
                    <Link className={style.link} to="/CrearCuenta" component={RouterLink}><People/> Crear Cuenta</Link>
                </ul>
            </nav>
        </header>
    </div>
    );
}