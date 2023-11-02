import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, startLoginUserWithEmailPassword } from "../../store/auth/"
import { useMemo } from "react"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const { formState, onInputChange } = useForm(formData)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const { email, password } = formState

  const onSubmit = async (event) => {
    event.preventDefault();

    dispatch(startLoginUserWithEmailPassword(formState))

  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container gap={1} >
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} >

            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error" >
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
