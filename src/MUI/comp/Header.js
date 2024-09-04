import React from 'react'
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
    // const classes = useStyles()
  return (
    <div>
        <Toolbar>
            <IconButton color='inherit'>
                <MenuIcon />
            </IconButton>
            <Typography className="flex-grow" variant='h6'>Blogging Website</Typography>
            <IconButton color='inherit'>
            <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
            </Badge>
            </IconButton>
            <IconButton color='inherit'>
                <AccountCircleIcon/>
            </IconButton>
        </Toolbar>
        <Divider/>
        <Toolbar className="text-2xl uppercase font-[400] justify-center font-OpenSans">
            Express your Emotions through words
        </Toolbar>

    </div>
  )
}

export default Header