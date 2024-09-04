import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'

const FeaturedPost = () => {
    const [image,setImage]=useState('https://images.pexels.com/photos/164357/pexels-photo-164357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  return (
    <Card className='relative md:py-[35px] md:px-[26px] bg-cover'>
    <div className='absolute w-full h-full inset-0 z-0 bg-black'>
        <div className='w-full h-[100%] z-0 bg-cover opacity-30' 
         style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
        }}>
        </div>
    </div>
    <CardContent className='relative z-10'>
        <Typography className='font-Oswald' variant='h4' gutterBottom>Custom CSS Missing in Create React App Production Build</Typography>
        <Typography className='font-Mali font-[200] line-clamp-2' variant='h6'> Custom CSS not applied in production build of Create React App project, despite working in development. Solutions include moving CSS to public directory, using inline styles, or modifying Vite config after ejecting.</Typography>
    </CardContent>
    <CardActions className='z-20'>
        <Button variant='text' className='hover:bg-white hover:bg-opacity-[14%] text-white'>Read more...</Button>
    </CardActions>
</Card>
  )
}

export default FeaturedPost
