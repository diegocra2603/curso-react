import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import { useMemo } from "react"

export const SideBarItem = ({ id, title, body }) => {

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title
    }, [title])

    return (
        <ListItem disablePadding>
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
