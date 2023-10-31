import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  displayName: 'Diego Cruz',
  email: 'diego@gmail.com',
  password: '12345'
}

export const RegisterPage = () => {

  const { formState, onInputChange, onResetForm } = useForm(formData)

  const { name: displayName, email, password } = formState

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
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
