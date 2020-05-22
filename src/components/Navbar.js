import React from 'react';
import { AppBar, Toolbar, IconButton, Link, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        padding: "7px 8px",
        borderRadius: "10%",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.06)",
            textDecoration: 'none',
        },
        fontSize: "2.5ex",
        fontWeight: "550",
        '&:active':{
            background:"rgba(0, 0, 0, 0.1)"
        }
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='secondary' position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link className={classes.link}
                        component={RouterLink} to='/' color='inherit'>
                        Inicio
                    </Link> 
                    {["Iniciar Sesión", "Crear Cuenta"].map((link) =>
                        <Link key={link} className={classes.link}
                            component={RouterLink} to={link.replace(/ /g, "")} color='inherit'>
                            {link}
                        </Link>)}
                </Toolbar>
            </AppBar>
        </div>
    );
}