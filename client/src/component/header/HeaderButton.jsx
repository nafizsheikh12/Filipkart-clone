import React,{useState,useContext} from 'react'
import {Badge, Box,Button, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ShoppingCart } from '@mui/icons-material'
import {Link} from 'react-router-dom'

//component
import LoginDialog from '../login/Login'
import {LoginContext} from '../../context/ContextProvider'

const useStyle = makeStyles({
   login: {
    background: '#fff !important',
    color: '#0547ff !important',
    width: '109px',
    padding:'5px 40px',
    marginRight: '27px !important'
   },
   wrapper: {
       margin: '0 5% 0 auto',
       display: 'flex',
       alignItems: 'center',
       '& > *': {
           marginRight: 50,
           alignItems: 'center'
       }

   },
   container: {
       display: 'flex',
       marginLeft: '15px'
   },
   link: {
    textDecoration: 'none',
    color: 'inherit'
}
})

const HeaderButton = () => {
    const [open,setopen] = useState(false)
    const classes = useStyle()
    const {account,setaccount} = useContext(LoginContext)

    const openLoginDialog = () => {
        setopen(true)
    }
    return (
        <Box className={classes.wrapper}>

         { account ?  <Typography>{account}</Typography>  :
           <Link to='/login' className={classes.link}>
            <Button variant='contained' onClick={() => { openLoginDialog() }} className={classes.login}>Login</Button>
           </Link> 

         } 

            <Typography >More</Typography>
            <Box className={classes.container}>
               <Badge badgeContent={4} color='error'>
                   <ShoppingCart/>
               </Badge>
               <Link to='/cart' className={classes.link}>
               <Typography>cart</Typography>
               </Link>
               <LoginDialog open={open} setopen={setopen} setaccount={setaccount}/>
            </Box>
        </Box>
    )
}

export default HeaderButton
