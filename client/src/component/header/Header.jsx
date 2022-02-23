import React from 'react'
import {AppBar,Toolbar,Typography,Button,IconButton,Box} from '@mui/material'
import {MenuIcon} from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';

//component
import SearchBar from './SearchBar'
import HeaderButton from './HeaderButton'


const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height:60
    },
    logo: {
        width: 75
    },
    container: {
        display:"flex"
    },
    component: {
        marginLeft: '12%'
    }, 
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
   
   
})




const Header = () => {
    const classes= useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (<>
         <AppBar position="static" className={classes.header}>
            <Toolbar>
              <Box className={classes.component}>
              <Link to='/'>
               <img src={logoURL} className={classes.logo} />
               </Link>
               <Box className={classes.container}>
                   <Typography  className = {classes.subHeading}> Explore Plux </Typography>
                   <img src={subURL} className={classes.subURL} />
               </Box>
               </Box>
               <SearchBar/> 
               <HeaderButton/>
           </Toolbar>
         </AppBar> 
      </>
    )
}

export default Header
