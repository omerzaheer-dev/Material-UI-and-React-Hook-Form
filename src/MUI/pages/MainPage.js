import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from "@mui/system"
import Header from "../comp/Header"
import FeaturedPost from '../comp/FeaturedPost';
import { Grid2, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PostCard from '../comp/PostCard';
import { featuredPosts } from '../Data/data';
import Main from '../comp/Main';
import SideBar from '../comp/SideBar';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const MainPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth={'lg'}> 
        <Header/>
        <FeaturedPost/>
        <br/>
        <Grid container spacing={2}>
          {
            featuredPosts.map((post,index)=>{
              return(
                <PostCard post={post} id={index}/>
              )
            })
          }
        </Grid>
        <br/>
        <Grid container spacing={5}>
          <Main title="What is in your mind"/>
          <SideBar/>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default MainPage
