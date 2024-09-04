import { Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { posts } from '../Data/data';

const Main = ({title}) => {
  return (
    <Grid size={{ xs: 12,md:8}}>
        <Typography variant='h6' gutterBottom>{title}</Typography>
        <Divider/>
        {
            posts.map(post=>(
                <Markdown>{post.body}</Markdown>
            ))
        }
    </Grid>
  )
}

export default Main
