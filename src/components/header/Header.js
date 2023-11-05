import * as React from 'react';
import AppBar from "@mui/material/AppBar";

import {IconButton, Toolbar, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShowMenu from "../menu/Menu";
import {Link} from "react-router-dom";



export default function  Header() {
    return(

        <AppBar className="header">
            <Toolbar>
                <ShowMenu/>
                <Typography variant="h6" sx={{ flexGrow: 10 }} align='center'>
                    <Link to="/home">
                        <p > My Cook Book </p>
                    </Link>

                </Typography>
                <Link to="/login" >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="person"
                    sx={{mr:2, alignItems:'right' }}
                    // flexGrow: 1
                >
                        <PersonIcon />
            </IconButton>
            </Link>
            </Toolbar>
        </AppBar>

    );
}

