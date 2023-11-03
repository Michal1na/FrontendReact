import * as React from 'react';
import AppBar from "@mui/material/AppBar";

import {IconButton, Toolbar, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShowMenu from "../menu/Menu";



export default function  Header() {
    return(

        <AppBar>
            <Toolbar>
                <ShowMenu/>
                <Typography variant="h6" sx={{ flexGrow: 10 }}>
                <p > My Cook Book </p>
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="person"
                    sx={{mr:2, alignItems:'right' }}



                    // flexGrow: 1
                >
            <PersonIcon/>
            </IconButton>

            </Toolbar>
        </AppBar>

    );
}

