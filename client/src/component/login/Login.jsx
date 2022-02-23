import React,{useState} from 'react'
import {Dialog,DialogContent,Box,Typography, TextField, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'

//componet
import {postUser,userLogin} from '../../service/api'

const useStyle = makeStyles({
   component: {
    height: '70vh',
    width: '85vh',
    padding: '0 !important',
    maxWidth: 'unset !important'
   },
   image: {
    backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
    background: '#2874f0',
    backgroundPosition: 'center 85%',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    width: '40%',
    padding: '45px 35px',
    '& > *': {
        color: '#FFFFFF',
        fontWeight: 600
    }
  },

  login: {
      display: 'flex',
      padding: '25px 35px',
      flex: 1,
      flexDirection: 'column',
      '& > *': {
          marginTop:'20 !important'
      }
  },
 
loginBtn: {
    textTransform: 'none !important',
    background: '#FB641B !important',
    color: '#fff !important',
    height:' 48 !important',
    borderRadius: '2 !important'
},
requestbtn: {
    textTransform: 'none !important',
    background: '#fff !important',
    color: '#2874f0 !important',
    height: '48 !important' ,
    borderRadius: '2 !important',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%) !important'
},
text: {
    color: '#878787 !important',
    fontSize:' 8 !important',
    marginTop: '10px !important',
    marginBottom: '10px !important'
},
createText: {
    marginTop: '43px !important',
    textAlign: 'center !important',
    color: '#2874f0 !important',
    fontWeight:' 600 !important',
    fontSize:' 14 !important',
    cursor: 'pointer !important'
},
error: {
    fontSize: 10,
    color: '#ff6161',
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600
}

 
})

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues ={
    username: '',
    password: ''
}

const Login = ({open,setopen,setaccount}) => {
    const classes = useStyle()
    const [iaccount,isetAccount] = useState(accountInitialValues.login)
    const [signup,setsignup] = useState(signupInitialValues)
    const [login,setlogin] = useState(loginInitialValues)
    const [ error, showError] = useState(false);

    const handleClose = () => {
        setopen(false)
        isetAccount(accountInitialValues.login)    
    }

    const toggleAccount = () => {
        isetAccount('signup')
    }


    const signupUser = async () => {
      let res =  await postUser(signup); 
      if(!res) return;
      handleClose()
      setaccount(signup.username)

    }

    const onInputChange = (e) => {
        setsignup({...signup,[e.target.name]: e.target.value})
    }

    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await userLogin(login);
        if(!response) 
         showError(true);
        else {
            showError(false);
            handleClose();
            setaccount(login.username);
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} className={classes.main}>
                <DialogContent className={classes.component}>
                   <Box style={{display: 'flex'}}>
                       <Box className={classes.image}>
                          <Typography>{iaccount.heading}</Typography>
                          <Typography>{iaccount.subHeading}</Typography>
                       </Box>

                     {
                        iaccount.view === 'login' ?   
                       <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter username number'/>
                            <TextField onChange={(e) => onValueChange(e)} name='password' label="Enter Your Password" style={{marginTop: '8px',marginBottom:'5px'}}/>

                            { error && <h1>hello</h1>}

                            <Typography className={classes.text}>By continuing, you agree to Flipcart Terms of use and Privacy Policy</Typography>
                            <Button className={classes.loginBtn} variant='contained' onClick={() => loginUser()}>Login</Button>
                            <Typography style={{textAlign: 'center'}} className={classes.text}>OR</Typography>
                            <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
                            <Typography onClick={() => { toggleAccount() }} className={classes.createText} >New to Flipcart? Create an account</Typography>
                       </Box> :

                       <Box className={classes.login}>
                            <TextField  onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname'/>
                            <TextField  onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname'/>
                            <TextField  onChange={(e) => onInputChange(e)} name='email' label='Enter Email'/>
                            <TextField  onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number'/>
                            <TextField  onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
                            <TextField  onChange={(e) => onInputChange(e)} name='password' label="Enter Your Password" style={{marginTop: '8px',marginBottom:'5px'}}/>
                          
                            <Button variant='contained' className={classes.loginBtn} onClick={() => signupUser()}>SignUP</Button>
                          
                       </Box> 


                     }  
                   </Box>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Login
