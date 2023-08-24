import {
    AppBar,
    Typography,
    Box,
    Toolbar
  } from '@mui/material';
  import React from 'react';
  import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
  import useStyles from '../styles/styles';

const Header = () => {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1, height: '70px' }}>
            <AppBar position="static">
                <Toolbar>
                    <LocalPhoneRoundedIcon/>
                    <Typography sx={{ font: 'Roboto', flexGrow: 1, marginLeft: '10px', fontSize: '22px'}}>
                        My Contacts
                    </Typography>
                </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Header;