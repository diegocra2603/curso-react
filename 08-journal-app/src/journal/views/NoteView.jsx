import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
            gap={2}
        >

            <Grid item>
                <Typography fontSize={39}>28 de agosto de 2023</Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{ padding: 2 }} >
                    <SaveOutlined sx={{ padding: 2 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingres un título"
                label="Título"
                />
            </Grid>

            <Grid container>
                <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                />
            </Grid>

            {/* ImagenGalery */}
            <ImageGallery />

        </Grid>
    )
}