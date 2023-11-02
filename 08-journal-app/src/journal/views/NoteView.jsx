import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks"
import { useSelector } from "react-redux"
import { useMemo } from "react"

export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal);

    const { formState, onInputChange, onResetForm } = useForm(note);

    const { body, title, date, imageUrls } = formState;

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

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
                <Typography fontSize={39}>{dateString}</Typography>
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
                    name="title"
                    onChange={onInputChange}
                    value={title}
                />
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    onChange={onInputChange}
                    value={body}
                />
            </Grid>

            {/* ImagenGalery */}
            <ImageGallery />

        </Grid>
    )
}