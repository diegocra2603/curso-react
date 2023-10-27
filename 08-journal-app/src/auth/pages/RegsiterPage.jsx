import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegsiterPage = () => {
  return (

    <AuthLayout title="Register">
      <form>
        <Grid container gap={1} >

          <Grid item xs={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={1}  fullWidth>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}} >¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
