import '../style/Header.css'

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,

} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar sx={{ background: '#fff' }}>
            <Toolbar>
                <img src={require('../assets/img/logo.png')} className='logo' alt='logo'></img>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;