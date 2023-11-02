import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {IconButton, Toolbar, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import showMenu from "../menu/Menu";


export default function  Header() {
    return(

        <AppBar>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr:2,alignItems:'left' }}
                onClick={showMenu}

            >
            <MenuIcon  />
            </IconButton>
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

