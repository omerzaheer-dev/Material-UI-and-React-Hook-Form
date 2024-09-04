import React from 'react'
import Grid from '@mui/material/Grid2';
import { Paper, Typography } from '@mui/material';
const SideBar = ({archives,social,description,title}) => {
  return (
    <Grid size={{ xs: 12, md:4}}>
        <Paper className='py-5 px-3'>
            <Typography varient={'h4'}>About</Typography>
            <Typography varient={'h5'}>
            To render children at the same DOM level as with no HTML wrapper, set wrapper to React.Fragment. This will still wrap your children in a React node for the purposes of rendering, but the wrapper element won't show up in the DOM.
            </Typography>
        </Paper>
    </Grid>
  )
}

export default SideBar
