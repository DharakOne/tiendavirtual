import React from 'react'
import useForm from '../components/hooks/useForm'
import { auth } from '../firebase/firebaseConfig'
import { TextField, Typography, makeStyles, Grid } from '@material-ui/core'
import ButtonCustomize from "../components/ButtonCustomize"

const useStyles = makeStyles((theme) => ({
    buttonSubmit: {
        display: 'block',
        backgroundColor: '#0063cc',
        background: '#0063cc',
    },
    input: {
        display: 'block',
        paddingBottom: '15px'
    },
    form: {
        textAlign: 'center'
    },
    IniciarSesion: {
        margin: '2% 0',
        padding: '35px 20px',
        background: 'white',
        borderRadius: '7%',
        boxShadow: '20px 1opx'
    }
}
));


export default function IniciarSesion() {
    const style = useStyles()
    const [stateForm, handleChange, createSubmit] = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = createSubmit((setStateForm) => {
        auth.signInWithEmailAndPassword(
            stateForm.email, stateForm.password)
            .then((dataUser) => {
                setStateForm({
                    email: "",
                    password: ""
                })
                console.log(dataUser.user)
            })
            .catch(error => console.log('Hay un error de tipo:', error.message))
    })



    return (

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <div className={style.IniciarSesion}  >
                <form onSubmit={handleSubmit}>
                    <Typography variant='h4'>Iniciar Sesion</Typography>
                    <TextField
                        className={style.input}
                        name="email"
                        label="Email"
                        type="email"
                        value={stateForm.email}
                        onChange={handleChange} />

                    <TextField
                        className={style.input}
                        name="password"
                        label="Contraseña"
                        type="password"
                        value={stateForm.password}
                        onChange={handleChange} />
                    <ButtonCustomize
                    type="submit"
                        color="#00e676"
                        colorH="#00c853"
                    >
                        Iniciar Session
                    </ButtonCustomize>
                </form>

            </div>
        </Grid>
    )
}