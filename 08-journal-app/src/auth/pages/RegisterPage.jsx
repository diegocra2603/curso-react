import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useState } from "react"

const formData = {
  displayName: 'Diego Cruz',
  email: 'diego@gmail.com',
  password: '123456'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false)

  const { formState, onInputChange, onResetForm, isFormValid, formValidation } = useForm(formData, formValidations)

  const { displayName, email, password } = formState
  const { displayNameValid, emailValid, passwordValid } = formValidation

  const onSubmit = (e) => {
    e.preventDefault()

    setFormSubmited(true)
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      <h1>FormValid {isFormValid ? 'Es Valido' : 'Es Invalido'}</h1>
      <form onSubmit={onSubmit} >
        <Grid container gap={1} >

          <Grid item xs={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full name"
              name="displayName"
              onChange={onInputChange}
              value={displayName}
              fullWidth
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid && formSubmited}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              name="email"
              onChange={onInputChange}
              value={email}
              fullWidth
              error={!!emailValid && formSubmited}
              helperText={emailValid && formSubmited}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={onInputChange}
              value={password}
              fullWidth
              error={!!passwordValid && formSubmited}
              helperText={passwordValid && formSubmited}
            />
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }} >¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
