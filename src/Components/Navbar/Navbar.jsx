import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color='inherit'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src="https://i.pinimg.com/originals/fd/9a/15/fd9a158c8c8e460b63c7e0eb26159a2f.png" alt="Commerce.js" height="25px" className={classes.image} />
                        E-Commerce
                    </Typography>

                    <div className={classes.grow} />

                    <div className={classes.button}>
                        <IconButton aria-label="Show card items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
