import { SaveOutlined, UploadFileOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startSaveNote, startUpladingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { formState, onInputChange, onResetForm, setFormState } = useForm(note);

    const dispatch = useDispatch()

    useEffect(() => {
        setFormState(note)
    }, [note])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {

        if (messageSaved.length > 0) {
            Swal.fire('Nota actulizada', messageSaved, 'success');
        }

    }, [messageSaved])

    const { body, title, date, imageUrls } = formState;

    const fileInputRef = useRef();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const handlerSaveNote = () => {
        dispatch(startSaveNote())
    }

    const handlerOnFileInputChange = ({ target }) => {
        if (target.files === 0) {
            return;
        }

        dispatch(startUpladingFiles(target.files))

    }


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

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handlerOnFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current?.click()}>
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={handlerSaveNote}
                    color="primary"
                    sx={{ padding: 2 }} >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
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