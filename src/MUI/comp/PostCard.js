// import { Grid2 } from '@mui/material';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'

const PostCard = ({post}) => {
  return (
    <Grid size={{ xs: 12, sm: 12 , md:6}}>
        <CardActionArea component="a">
            <Card className='flex max-h-[170px] h-auto overflow-hidden'>
                <CardContent className='flex-1'>
                    <Typography variant='h5' className="line-clamp-1">{post.title}</Typography>
                    <Typography color='textSecondary' variant="body2">{post.date}</Typography>
                    <Typography variant="subtitle1" className="line-clamp-2" gutterBottom>{post.description}</Typography>
                    <Typography variant="button" sx={{ color: "orangered"}}>
                        Continue Reading
                    </Typography>
                </CardContent>
                <CardMedia className="w-[40%] max-h-full bg-contain overflow-hidden md:hidden"
                    component="img"
                    image={post.image}
                    alt={post.imageText}
                    title={post.imageText}
                />
            </Card>
        </CardActionArea>
    </Grid>
  )
}

export default PostCard