import { useMemo } from "react"
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote, } from "../../store/journal"

export const SideBarItem = ({ id, title, body, date, imageUrls }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title
    }, [title]);

    const handlerSelectedNote = () => {

        dispatch(setActiveNote({
            id,
            title,
            body,
            date,
            imageUrls
        }))
        
    }

    return (
        <ListItem disablePadding onClick={handlerSelectedNote} >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <Tooltip title={(newTitle === title) ? '' : title}>
                        <ListItemText primary={newTitle} />
                    </Tooltip>
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
